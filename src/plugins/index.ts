import React from "react";
import { MAllBodyType, Message, MSomeBodyType } from "../data";

const plugins = new Map();

// 获取插件名称
export const getPluginName = (type: string, subType?: string): string =>
  `${type}${subType ? `\\${subType}` : ""}`;

// 判断插件库是否已有该插件
export const hasPlugin = (getPluginName: string) => plugins.has(getPluginName);

// 根据插件类型返回插件
export const getPlugin = (
  type: string,
  subType?: string
): React.FunctionComponent<Message<MSomeBodyType>> => {
  const pluginName = getPluginName(type, subType);
  if (hasPlugin(pluginName)) return plugins.get(pluginName);
  throw new Error(`plugin ${pluginName} haven not been registered`);
};

// 向插件库注入插件
export const setPlugin = (
  component: React.FunctionComponent<Message<MAllBodyType>>,
  type: string,
  subType?: string
) => {
  const pluginName = getPluginName(type, subType);
  if (hasPlugin(pluginName)) {
    throw new Error(`plugin ${pluginName} haven  been registered`);
  }
  if (typeof component !== "function") {
    throw new Error(`the component is not a function`);
  }
  plugins.set(pluginName, component);
  return pluginName;
};
