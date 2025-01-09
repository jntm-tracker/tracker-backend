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
