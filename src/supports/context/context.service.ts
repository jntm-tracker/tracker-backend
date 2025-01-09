import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import * as UAParser from 'ua-parser-js';
import { convertJsonPropertyToString } from '@/utils';

@Injectable()
export class ContextService {
  constructor(@Inject(REQUEST) private request: any) {}

  userInfoHolder(): {
    id: number;
    userName: string;
  } {
    const user: {
      id: number;
      username: string;
      mobile?: string;
    } = this.request.headers.user;
    return {
      id: user?.id,
      userName: user?.username,
    };
  }

  userAgentInfoHolder() {
    const userAgentString = this.request.headers['user-agent'];
    const parser = new UAParser();
    const userAgent = parser.setUA(userAgentString).getResult();
    const userAgentInfo = {
      userAgent: userAgent?.ua,
      os: convertJsonPropertyToString(userAgent?.os, '/'),
      browser: convertJsonPropertyToString(userAgent?.browser, '/'),
      device: convertJsonPropertyToString(userAgent?.device, '/'),
    };
    return userAgentInfo;
  }
}
