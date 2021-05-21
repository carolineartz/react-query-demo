/// <reference path="api" />

declare module '*.svg'

declare type PropsOf<TComponent> = TComponent extends React.ComponentType<infer P> ? P : never
