import React from 'react';

export interface SidebarItemType {
    type: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
