/* eslint-disable react/prop-types */
import { closestCenter, DndContext } from '@dnd-kit/core';
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Children, cloneElement } from 'react';

import DragIcon from '../../../public/icons/drag.svg';
import { Icon } from '../icon';

const SortableItem = ({ id, children: child, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id,
        transition: {
            duration: '200',
            easing: 'ease'
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return cloneElement(child, {
        style,
        ref: setNodeRef,
        children: [
            ...child.props.children,
            <Icon key={`${id}-drag-button`} Svg={DragIcon} {...attributes} {...listeners} />
        ],
        ...props
    });
};

const withSortable = (WrappedComponent) => {
    const WithSortable = ({ items, onDragEnd, children, ...props }) => (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
            modifiers={[restrictToFirstScrollableAncestor]}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
                useDragOverlay={false}
            >
                <WrappedComponent {...props}>
                    {Children.map(children, (child) => (
                        <SortableItem key={child.key} id={child.key} {...child.props}>
                            {child}
                        </SortableItem>
                    ))}
                </WrappedComponent>
            </SortableContext>
        </DndContext>
    );

    WithSortable.displayName = `WithLimit(${WrappedComponent.name})`;

    return WithSortable;
};

export { withSortable };
