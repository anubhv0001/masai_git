import { books } from './prototypeExportImport';

const summaries = books.map(book => book.getSummary())
console.log(summaries);
