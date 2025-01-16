/**
 * { name: 'Chrome', version: '130.0.0.0', major: '130' }
 * Chrome-130.0.0.0-130
 */
export const convertJsonPropertyToString = (
  data: Record<string, object> = {},
  placeholder = '',
) => {
  let result = '';
  for (const key in data) {
    if (data?.[key]) {
      result += `${data?.[key]}${placeholder}`;
    }
  }
  return result.slice(0, -1);
};

export const convertCamelToSnaceCase = (
  record: Record<string, any>,
): Record<string, any> => {
  const formatRecord = Object?.keys(record)?.reduce((prev, cur) => {
    const key = cur.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    return {
      ...prev,
      [key]: record?.[cur],
    };
  }, {});
  return formatRecord;
};
