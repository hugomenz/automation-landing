// Export research records to reusable JSON or flat CSV. Zero dependencies. ESM.

function flatten(record) {
  const flat = {};
  for (const [k, v] of Object.entries(record)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      for (const [ik, iv] of Object.entries(v)) {
        flat[`${k}.${ik}`] = iv;
      }
    } else if (Array.isArray(v)) {
      flat[k] = v.join('; ');
    } else {
      flat[k] = v;
    }
  }
  return flat;
}

function csvCell(value) {
  if (value == null) return '';
  const s = String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replaceAll('"', '""')}"`;
  return s;
}

/** Serialize records to a pretty JSON envelope. */
export function toJson(records) {
  return JSON.stringify(
    {
      schema: 'linkedin_research_readonly/records',
      exported_at: new Date().toISOString(),
      count: (records || []).length,
      records: records || [],
    },
    null,
    2,
  );
}

/** Serialize records to CSV. Nested objects are flattened, arrays are joined with "; ". */
export function toCsv(records) {
  const rows = (records || []).map(flatten);
  const columns = [];
  const seen = new Set();
  for (const row of rows) {
    for (const key of Object.keys(row)) {
      if (!seen.has(key)) {
        seen.add(key);
        columns.push(key);
      }
    }
  }
  const lines = [columns.map(csvCell).join(',')];
  for (const row of rows) {
    lines.push(columns.map((c) => csvCell(row[c])).join(','));
  }
  return lines.join('\r\n');
}

/**
 * linkedin_export_research(records, format)
 * @param {object[]} records
 * @param {'json'|'csv'} format
 * @returns {{format:string, content:string, count:number}}
 */
export function exportResearch(records, format = 'json') {
  const fmt = String(format).toLowerCase();
  if (fmt === 'csv') return { format: 'csv', content: toCsv(records), count: (records || []).length };
  if (fmt === 'json') return { format: 'json', content: toJson(records), count: (records || []).length };
  throw new Error(`Unsupported export format: ${format}. Use "json" or "csv".`);
}
