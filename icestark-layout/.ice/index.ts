export * from './runApp';
export { runApp as createApp } from './runApp';
export { lazy } from './lazy';
export * from './types';
export const APP_MODE = (global as any).__app_mode__ || process.env.APP_MODE;

export * from './router';
import helpers from './helpers';
import logger from './logger';
import config from './config';
import request from './request/request';
import useRequest from './request/useRequest';
import { createStore } from '@ice/store';

export { helpers, logger, config, request, useRequest, createStore };
