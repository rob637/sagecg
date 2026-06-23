// Tech matrix — central index.
// Add a new company: create ./{id}.ts and register it in `companies` below.
// Add a new row: edit ./_rows.ts and add the key to each company's data file.

import { sectionDefs, type Cell, type RowDef, type SectionDef, type CompanyData } from './_rows';

import sagecg from './sagecg';
import leaderreps from './leaderreps';
import cbrLabs from './cbr-labs';
import voraprep from './voraprep';
import kindkudos from './kindkudos';
import toothhound from './toothhound';
import longestTable from './longest-table';
import footballDraft from './football-draft';
import gridironXo from './gridiron-xo';

export interface Company {
  id: string;
  name: string;
  accent?: string;
  data: CompanyData;
}

export const companies: Company[] = [
  { id: 'sagecg',        name: 'SageCG',         accent: '#b45309', data: sagecg },
  { id: 'leaderreps',    name: 'LeaderReps',     accent: '#0f766e', data: leaderreps },
  { id: 'cbr-labs',      name: 'CBR Labs',       accent: '#1e3a8a', data: cbrLabs },
  { id: 'voraprep',      name: 'VoraPrep',       accent: '#7c3aed', data: voraprep },
  { id: 'kindkudos',     name: 'KindKudos',      accent: '#0f2a44', data: kindkudos },
  { id: 'toothhound',    name: 'ToothHound',     accent: '#0ea5e9', data: toothhound },
  { id: 'longest-table', name: 'Longest Table',  accent: '#c2410c', data: longestTable },
  { id: 'football-draft',name: 'NFL Fantasy Auction Draft', accent: '#166534', data: footballDraft },
  { id: 'gridiron-xo',   name: 'Gridiron X&O',    accent: '#1a3a2a', data: gridironXo },
];

export interface ResolvedRow {
  key: string;
  label: string;
  values: Record<string, Cell>;
}

export interface ResolvedSection {
  title: string;
  rows: ResolvedRow[];
}

export const sections: ResolvedSection[] = sectionDefs.map((sec: SectionDef) => ({
  title: sec.title,
  rows: sec.rows.map((row: RowDef) => {
    const values: Record<string, Cell> = {};
    for (const c of companies) {
      const v = c.data[row.key];
      values[c.id] = v === undefined ? null : v;
    }
    return { key: row.key, label: row.label, values };
  }),
}));

export type { Cell } from './_rows';
