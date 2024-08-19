import React, { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';
import styled from 'styled-components';

export enum FlexDirection {
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse',
}

export enum FlexAlignItems {
    NORMAL = 'normal',
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    BASELINE = 'baseline',
    INHERIT = 'inherit',
    STRETCH = 'stretch',
}

export enum FlexJustifyContent {
    NORMAL = 'normal',
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    INHERIT = 'inherit',
}

export enum FlexWrap {
    NO_WRAP = 'nowrap',
    WRAP = 'wrap',
    WRAP_REVERSE = 'wrap-reverse',
    INHERIT = 'inherit',
}

export type FlexBoxStyleProps = {
    distance?: string;
    flexWrap?: FlexWrap;
    width?: string;
    height?: string;
    minWidth?: string;
    maxWidth?: string;
    textOverflow?: string;
    whiteSpace?: string;
    flexDirection?: FlexDirection;
    alignItems: FlexAlignItems;
    justifyContent: FlexJustifyContent;
    overflow?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    textAlign?: string;
    flexShrink?: number;
    position?: string;
    padding?: string;
};

const StyledFlexBox = styled.div<FlexBoxStyleProps>`
    min-width: ${({ minWidth }) => minWidth || ''};
    max-width: ${({ maxWidth }) => maxWidth || ''};
    text-overflow: ${({ textOverflow }) => textOverflow || ''};
    white-space: ${({ whiteSpace }) => whiteSpace || ''};
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-wrap: ${({ flexWrap }) => flexWrap};
    overflow: ${({ overflow }) => overflow};
    text-align: ${({ textAlign }) => textAlign};
    gap: ${({ distance }) => distance};
    flex-shrink: ${({ flexShrink }) => (flexShrink ?? 1)};
    position: ${({ position }) => position};

    margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
        `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`};
    padding: ${({ padding }) => padding};
`;

export type FlexBoxProps = {
    direction?: FlexDirection;
    wrap?: FlexWrap;
    alignItems?: FlexAlignItems;
    justifyContent?: FlexJustifyContent;
    distance?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    overflow?: string;
    width?: string;
    height?: string;
    dataTestid?: string;
    dataSelectionAttribute?: string;
    minWidth?: string;
    maxWidth?: string;
    textOverflow?: string;
    whiteSpace?: string;
    className?: string;
    textAlign?: string;
    flexShrink?: number;
    position?: string;
    padding?: string;
    onClick?: MouseEventHandler | undefined;
    onDoubleClick?: MouseEventHandler | undefined;
    onMouseEnter?: MouseEventHandler | undefined;
    onMouseLeave?: MouseEventHandler | undefined;
    onMouseUp?: MouseEventHandler | undefined;
    onMouseDown?: MouseEventHandler | undefined;
};

/**
 * Flex Box renders a container for a flexible box layout.
 *
 * The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure
 * without using float or positioning.
 */
export const FlexBox = forwardRef<HTMLDivElement, PropsWithChildren<FlexBoxProps>>(
    (
        {
            direction = FlexDirection.ROW,
            wrap = FlexWrap.NO_WRAP,
            alignItems = FlexAlignItems.NORMAL,
            justifyContent = FlexJustifyContent.NORMAL,
            distance = '0',
            marginTop = '0',
            marginRight = '0',
            marginBottom = '0',
            marginLeft = '0',
            overflow,
            children,
            width,
            height,
            dataTestid,
            dataSelectionAttribute,
            minWidth,
            maxWidth,
            textOverflow,
            whiteSpace,
            className,
            textAlign,
            flexShrink,
            position,
            padding,
            onClick,
            onDoubleClick,
            onMouseEnter,
            onMouseLeave,
            onMouseUp,
            onMouseDown,
        },
        ref,
    ) => (
        <StyledFlexBox
            ref={ref}
            className={className}
            data-testid={dataTestid}
            data-selection-attribute={dataSelectionAttribute}
            flexDirection={direction}
            flexWrap={wrap}
            alignItems={alignItems}
            justifyContent={justifyContent}
            distance={distance}
            overflow={overflow}
            width={width}
            height={height}
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            minWidth={minWidth}
            maxWidth={maxWidth}
            textOverflow={textOverflow}
            whiteSpace={whiteSpace}
            textAlign={textAlign}
            flexShrink={flexShrink}
            position={position}
            padding={padding}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown}
        >
            {children}
        </StyledFlexBox>
    ),
);
