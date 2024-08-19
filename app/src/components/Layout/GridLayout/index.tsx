import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div<{ distance?: string; elementMinWidth?: number; useWidth?: string }>`
    max-width: ${({ useWidth }) => (useWidth ? '100%' : '')};
    width: ${({ useWidth }) => (useWidth ? useWidth : '')};
    display: grid;
    grid-template-columns: ${({ elementMinWidth }) => `repeat(auto-fill, minmax(${elementMinWidth || 315}px, 1fr))`};
    grid-gap: ${({ distance }) => distance || 0};
`;

export type GridLayoutProps = {
    children: ReactElement[];
    distance?: string;
    dataTestid?: string;
    elementMinWidth?: number;
    useWidth?: string;
};

/**
 * The Grid Layout component renders children that will take on a variable amount of columns depending on available screen size.
 */
export function GridLayout({ children, distance, elementMinWidth, dataTestid, useWidth }: GridLayoutProps) {
    return (
        <StyledCardList
            distance={distance}
            elementMinWidth={elementMinWidth}
            data-testid={dataTestid}
            useWidth={useWidth}
        >
            {children}
        </StyledCardList>
    );
}
