import { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export type ResponseTransform = (input : AxiosResponse) => any;
export type ErrorTransform = (input : AxiosError) => any;

export type requestHandler = (
  requestConfiguration: AxiosRequestConfig,
  errorTransformer: ErrorTransform,
  responseTransformer: ResponseTransform,
  axiosInstance : AxiosInstance,
) => Promise <AxiosResponse>;

export type Method =
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch';

export type EndpointConfig = {
  path: string,
  method: Method,
  name: string,
  errorTransformer: ErrorTransform;
  responseTransformer: ResponseTransform,
};

export type BindRequest = {
  config : EndpointConfig,
  actioName : string,
  axiosInstance: AxiosInstance,
};

export type BindedAction = (params : any) => {
  type: string,
  signature: Symbol,
  execAsync: Promise<AxiosResponse>,
};

export { default as Endpoint } from 'endpoint/Endpoint';