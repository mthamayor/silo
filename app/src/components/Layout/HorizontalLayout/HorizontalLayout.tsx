import React, { PropsWithChildren } from 'react';
import { FlexBox, FlexBoxProps, FlexDirection, FlexJustifyContent } from '../FlexBox';

export type HorizontalLayoutProps = Omit<FlexBoxProps, 'direction'> & {
    direction?: Exclude<FlexDirection, FlexDirection.COLUMN | FlexDirection.COLUMN_REVERSE>;
    spaceBetween?: boolean;
};

/**
 * The Horizontal Layout component is a simple way to align multiple elements horizontally.
 *
 * By default the contained controls are not wrapped.
 * If you want more sophisticated layout options, consider GridLayout or FlexBox components.
 */
export const HorizontalLayout = ({
    children,
    justifyContent,
    spaceBetween,
    direction = FlexDirection.ROW,
    ...props
}: PropsWithChildren<HorizontalLayoutProps>) => (
    <FlexBox
        {...props}
        direction={direction}
        justifyContent={justifyContent ?? (spaceBetween ? FlexJustifyContent.SPACE_BETWEEN : FlexJustifyContent.NORMAL)}
    >
        {children}
    </FlexBox>
);
