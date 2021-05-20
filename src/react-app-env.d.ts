/// <reference types="react-scripts" />

// would put this file in @/types, but CRA creates it automatically if it isn't here.
declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any
  }
}
