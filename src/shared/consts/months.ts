import type { DefaultListElement, Months } from "@shared/types/common"

export const MONTHS: Record<Months, DefaultListElement> = {
  'Jan': {id: 1, label: 'Ýanwar'},
  'Feb': {id: 2, label: 'Fewral'},
  'Mar': {id: 3, label: 'Mart'},
  'Apr': {id: 4, label: 'Aprel'},
  'May': {id: 5, label: 'Maý'},
  'Jun': {id: 6, label: 'Iýun'},
  'Jul': {id: 7, label: 'Iýul'},
  'Aug': {id: 8, label: 'Awgust'},
  'Sep': {id: 9, label: 'Sentýabr'},
  'Oct': {id: 10, label: 'Oktýabr'},
  'Nov': {id: 11, label: 'Noýabr'},
  'Dec': {id: 12, label: 'Dekabr'},
}

export const MONTHS_ARRAY = Object.entries(MONTHS).map(([k,v]) => v)