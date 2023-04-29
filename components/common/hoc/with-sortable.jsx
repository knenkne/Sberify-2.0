/* eslint-disable react/prop-types */
import { closestCenter, DndContext } from '@dnd-kit/core';
import { restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Children, cloneElement } from 'react';

import { DragIcon } from '../../../public/icons';
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
            <Icon
                key={`${id}-drag-button`}
                Svg={DragIcon}
                className="shrink-0 relative z-10 w-8 h-8 ml-3 flex items-center justify-center rounded cursor-pointer text-secondary hover:text-primary"
                svgClassName="w-5 h-5 stroke-current"
                {...attributes}
                {...listeners}
            />
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

    WithSortable.displayName = `WithLimit(${WrappedComponent.displayName})`;

    return WithSortable;
};

export { withSortable };
