import { isObject, isArray, Dict, isFunction } from "."

export const omitObject = <T extends Dict, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  const result: Dict = {}

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key as K)) return

    result[key] = obj[key]
  })

  return result as Omit<T, K>
}

export const pickObject = <T extends Dict, K extends keyof T>(
  obj: T,
  keys: K[],
): { [P in K]: T[P] } => {
  const result = {} as { [P in K]: T[P] }

  keys.forEach((key) => {
    if (key in obj) result[key] = obj[key]
  })

  return result
}

export const splitObject = <T extends Dict, K extends keyof T>(
  obj: T,
  keys: K[],
) => {
  const picked: Dict = {}
  const omitted: Dict = {}

  for (const [key, value] of Object.entries(obj)) {
    if (keys.includes(key as T[K])) {
      picked[key] = value
    } else {
      omitted[key] = value
    }
  }

  return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>]
}

export const filterObject = <T extends Dict, K extends Dict>(
  obj: T,
  func: (key: keyof T, value: T[keyof T], obj: T) => boolean,
): K => {
  const result: Dict = {}

  Object.entries(obj).forEach(([key, value]) => {
    const shouldPass = func(key, value, obj)

    if (shouldPass) result[key] = value
  })

  return result as K
}

export const filterUndefined = <T extends Dict>(obj: T): T =>
  filterObject(obj, (_, val) => val !== null && val !== undefined)

export const merge = <T extends Dict>(
  target: any,
  source: any,
  mergeArray: boolean = false,
): T => {
  let result = Object.assign({}, target)

  if (isObject(source)) {
    if (isObject(target)) {
      for (const [sourceKey, sourceValue] of Object.entries(source)) {
        const targetValue = target[sourceKey]

        if (mergeArray && isArray(sourceValue) && isArray(targetValue)) {
          result[sourceKey] = targetValue.concat(...sourceValue)
        } else if (
          !isFunction(sourceValue) &&
          isObject(sourceValue) &&
          target.hasOwnProperty(sourceKey)
        ) {
          result[sourceKey] = merge(targetValue, sourceValue, mergeArray)
        } else {
          Object.assign(result, { [sourceKey]: sourceValue })
        }
      }
    } else {
      result = source
    }
  }

  return result as T
}

export const flattenObject = <T extends Dict>(
  obj: any,
  maxDepth: number = Infinity,
  omitKeys: string[] = [],
): T => {
  if ((!isObject(obj) && !isArray(obj)) || !maxDepth) return obj

  return Object.entries(obj).reduce((result, [key, value]) => {
    if (
      isObject(value) &&
      !Object.keys(value).some((key) => omitKeys.includes(key))
    ) {
      Object.entries(flattenObject(value, maxDepth - 1, omitKeys)).forEach(
        ([childKey, childValue]) => {
          result[`${key}.${childKey}`] = childValue
        },
      )
    } else {
      result[key] = value
    }

    return result
  }, {} as any) as T
}

export const objectFromEntries = <T extends Dict>(entries: any[][]): T =>
  entries.reduce((result, [key, value]) => {
    result[key] = value

    return result
  }, {} as any) as T

export const keysFormObject = <T extends Dict>(obj: T): (keyof T)[] =>
  Object.keys(obj)

export const replaceObject = <T extends any>(
  objOrArray: T,
  callBack: (value: any) => any,
): T => {
  if (isArray(objOrArray)) {
    return objOrArray.map(callBack) as T
  } else if (isObject(objOrArray)) {
    return Object.entries(objOrArray).reduce((obj, [key, value]) => {
      obj[key] = callBack(value)

      return obj
    }, {} as Dict) as T
  } else {
    return callBack(objOrArray)
  }
}

export const getObject = (
  obj: Dict,
  path: string | number,
  fallback?: any,
  i?: number,
) => {
  const k = typeof path === "string" ? path.split(".") : [path]

  for (i = 0; i < k.length; i += 1) {
    if (!obj) break
    obj = obj[k[i]]
  }

  return obj === undefined ? fallback : obj
}

export const memoizeObject = (func: typeof getObject) => {
  const cache = new WeakMap()

  const memoizedFunc = <T extends unknown = any>(
    obj: Dict,
    path: string | number,
    fallback?: any,
    i?: number,
  ): T => {
    if (typeof obj === "undefined") {
      return func(obj, path, fallback)
    }

    if (!cache.has(obj)) cache.set(obj, new Map())

    const map = cache.get(obj)

    if (map.has(path)) return map.get(path)

    const value = func(obj, path, fallback, i)

    map.set(path, value)

    return value as T
  }

  return memoizedFunc
}

export const getMemoizedObject = memoizeObject(getObject)

export const assignAfter = (target: Record<string, any>, ...sources: any[]) => {
  if (target == null)
    throw new TypeError("Cannot convert undefined or null to object")

  const result: Record<string, unknown> = { ...target }

  for (const nextSource of sources) {
    if (nextSource == null) continue

    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) continue

      if (nextKey in result) delete result[nextKey]

      result[nextKey] = nextSource[nextKey]
    }
  }

  return result
}
