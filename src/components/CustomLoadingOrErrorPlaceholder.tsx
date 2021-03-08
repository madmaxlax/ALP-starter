import React, { PropsWithChildren } from 'react';
import CustomCircularProgress from './CustomCircularProgress';
import { CustomError } from './CustomError';

interface LoadingOrErrorProps extends PropsWithChildren<unknown> {
  loading?: boolean;
  error?: unknown;
  data: unknown;
  loadingMessage?: string;
  errorMessage?: string;
}
export default function CustomLoadingOrErrorPlaceholder(props: LoadingOrErrorProps) {
  const { error, data, loadingMessage, loading, errorMessage, children } = props;

  if (error) {
    return <CustomError fullError={error} errorToDisplay={errorMessage} />;
  }
  if (loading || !data) {
    return <CustomCircularProgress text={loadingMessage} />;
  }
  if (data) {
    return <>{children}</>;
  }
  return <div>Custom Loading or Error Placeholder not used properly</div>;
}
