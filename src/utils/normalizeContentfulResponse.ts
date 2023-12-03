/** Contentful folds the content into "fields", "metadata", etc.
 * With this function we unfold all the content from "fields" recursively
 * returning a normalized response that matches the response produced
 * using graphql. Additionally it adds a field called __type which
 * holds the content-model type (e.g. "event", "sellingPoint", etc..)
 * IMPORTANT: The function modifies the original input.
 */
export const normalizeContentfulResponse = (t: any): any => {
  if (Array.isArray(t)) {
    return t.map(normalizeContentfulResponse);
  }

  if (t && typeof t === "object") {
    if (t?.content) {
      const contentTypeId: string | undefined = t?.nodeType;
      console.log(t);
      return normalizeContentfulResponse(
        contentTypeId
          ? {
              __type: contentTypeId,
              ...t.content,
              ...t.data,
            }
          : t.content
      );
    }

    Object.entries(t).forEach(([key, value]) => {
      // Iterate through all the keys from the object, if one of them it's an array
      // and any of its elements has the field "fields", then normalize it
      if (
        Array.isArray(value) &&
        value.some((arrayItem) => arrayItem?.content)
      ) {
        t[key] = normalizeContentfulResponse(value); // eslint-disable-line no-param-reassign
      } else if (typeof value === "object" && t[key]?.content) {
        t[key] = normalizeContentfulResponse(t[key]); // eslint-disable-line no-param-reassign
      }
    });
  }
  return t;
};
