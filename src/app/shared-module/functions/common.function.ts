export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const getTodayISODate = (): string => {
  return new Date().toISOString();
}

export const setScroll = (id: string, yOffset = -50) => {
  setTimeout(() => {
    const element: any = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 1000);
}

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(`${key}`);
}

export const setInLocalStorage = (key: string, value: any): void => {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(`${key}`, stringValue);
}
export const getFromLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(`${key}`) as any;
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
}


export const setInSessionStorage = (key: string, value: any): void => {
  const stringValue = JSON.stringify(value);
  sessionStorage.setItem(key, stringValue);
}
export const getFromSessionStorage = (key: string) => {
  const value = sessionStorage.getItem(key) as any;
  return JSON.parse(value);
}

export const removeFromSessionStorage = (key: string): void => {
  sessionStorage.removeItem(key);
}

export const GetLabelValueList = (array: string[]) => {
  return array.map(e => {
    return {
      label: e,
      value: e,
    }
  })
}

export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    );
  });
}

export const getQueryParams = (
  search: any,
  sort?: any,
  rowNumber?: number,
  recordsPerPage?: number,
  showAll = false
) => {
  const params = {};
  if (!isEmpty(search)) {
    params['search'] = JSON.stringify(search);
  }
  if (sort && sort.active && sort.direction) {
    params['sortOrder'] = sort.direction;
    params['sortBy'] = sort.active;
  }
  if (rowNumber && recordsPerPage) {
    params['rowNumber'] = rowNumber;
    params['recordsPerPage'] = recordsPerPage;
  }
  params['showAll'] = showAll;
  return params;
};

export const primengSortingFunction = (event) => {
  return (data1, data2) => {
      let value1 = (data1?.[event.field] || '' as string).toLowerCase();
      let value2 = (data2?.[event.field] || '' as string).toLowerCase();
      return value1.localeCompare(value2) * event.order
  }
}