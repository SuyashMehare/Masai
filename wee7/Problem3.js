function sortNames(names) {
    return names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }