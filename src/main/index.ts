import { ensureProcess } from '../common';
ensureProcess('main');

import { Integrations as NodeIntegrations } from '@sentry/node';

import * as ElectronMainIntegrations from './integrations';

export {
  Breadcrumb,
  BreadcrumbHint,
  Request,
  SdkInfo,
  Event,
  EventHint,
  EventStatus,
  Exception,
  Response,
  Severity,
  SeverityLevel,
  StackFrame,
  Stacktrace,
  Thread,
  User,
} from '@sentry/types';

export {
  addGlobalEventProcessor,
  addBreadcrumb,
  captureException,
  captureEvent,
  captureMessage,
  configureScope,
  getHubFromCarrier,
  getCurrentHub,
  Hub,
  Scope,
  startTransaction,
  setContext,
  setExtra,
  setExtras,
  setTag,
  setTags,
  setUser,
  withScope,
} from '@sentry/core';

export { flush, close, NodeOptions, NodeBackend, NodeClient, lastEventId } from '@sentry/node';

export { ElectronNetTransport } from './transports/electron-net';
export { ElectronOfflineNetTransport } from './transports/electron-offline-net';
export const Integrations = { ...ElectronMainIntegrations, ...NodeIntegrations };

export { init, ElectronMainOptions, defaultIntegrations } from './sdk';
export { IPCMode } from '../common';
