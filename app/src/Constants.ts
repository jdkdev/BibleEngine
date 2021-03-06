import normalizeText from './normalizeText';

export const Flags = {
  DEBUG: false,
  USE_CACHE: true,
  SEARCH_ENABLED: true
};

export enum Margin {
  EXTRA_SMALL = normalizeText(5),
  SMALL = normalizeText(10),
  MEDIUM = normalizeText(15),
  LARGE = normalizeText(20),
  EXTRA_LARGE = normalizeText(30)
}

export enum FontSize {
  EXTRA_SMALL = normalizeText(13),
  SMALL = normalizeText(15),
  MEDIUM = normalizeText(18),
  LARGE = normalizeText(20),
  EXTRA_LARGE = normalizeText(30)
}

export enum Color {
  TYNDALE_BLUE = '#38748C',
  WHITE = 'white'
}

export enum FontFamily {
  OPEN_SANS_BOLD = 'open-sans-bold',
  OPEN_SANS_SEMIBOLD = 'open-sans-semibold',
  OPEN_SANS = 'open-sans',
  OPEN_SANS_LIGHT = 'open-sans-light',
  CARDO_BOLD = 'cardo-bold',
  CARDO_ITALIC = 'cardo-italic',
  CARDO = 'cardo'
}

export enum AsyncStorageKey {
  CACHED_BOOK_LIST = 'cachedBookList',
  CACHED_CHAPTER_OUTPUT = 'cachedChapterOutput',
  CACHED_CHAPTER_NUM = 'cachedChapterNum',
  CACHED_OSIS_BOOK_NAME = 'cachedBookName'
}

export function getDebugStyles() {
  if (Flags.DEBUG) {
    return {
      borderColor: randomColor(),
      borderWidth: 1
    };
  }
  return {};
}

const testingColors = ['magenta', 'cyan', 'red', 'orange', 'green'];

export function randomColor() {
  const index = Math.floor(Math.random() * 4);
  return testingColors[index];
}
