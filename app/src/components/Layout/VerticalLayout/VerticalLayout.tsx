import React, { PropsWithChildren, forwardRef } from 'react';
import { FlexBox, FlexBoxProps, FlexDirection, FlexJustifyContent } from '../FlexBox';

export type VerticalLayoutProps = Omit<FlexBoxProps, 'direction'> & {
    direction?: Exclude<FlexDirection, FlexDirection.ROW | FlexDirection.ROW_REVERSE>;
};

/**
 * The Vertical Layout component is a simple way to align multiple elements vertically.
 *
 * By default the contained controls are not wrapped.
 * If you want more sophisticated layout options, consider GridLayout or FlexBox components.
 */
export const VerticalLayout = forwardRef<HTMLDivElement, PropsWithChildren<VerticalLayoutProps>>(
    ({ children, direction = FlexDirection.COLUMN, justifyContent, ...props }, ref) => (
        <FlexBox
            {...props}
            direction={direction}
            justifyContent={justifyContent ?? FlexJustifyContent.NORMAL}
            ref={ref}
        >
            {children}
        </FlexBox>
    ),
);
