"use client";


// CUSTOM ICON COMPONENTS
import appIcons from "icons"; 
// ==============================================================


// ==============================================================
export default function IconComponent({
  icon,
  ...props
}) {
  const Icon = appIcons[icon];
  return <Icon {...props} />;
}