import React from 'react'
import { ComponentProps } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [
      'text-h1',
      'text-h2',
      'text-h3',
      'text-h4',
      'text-h5',
      'text-body',
      'text-body-sm',
      'text-caption',
      'text-caption-sm',
      'text-footnote',
    ],
  },
});
/**
 * A utility function to have conditional classes with clsx and remove unnecessary values with tailwind-merge
 * Use this when styling components with tailwind
 * @example cn('bg-red-500', highlighted ? 'text-white' : 'text-yellow', 'p-4')
 * @param args
 */

export function cn(...args: ClassValue[]) {
  return customTwMerge(clsx(args));
}


type ListProps = Omit<ComponentProps<'div'>, 'children' | 'prefix'> & {
  children: React.ReactNode | React.ReactNode[];
  isDivider?: boolean;
  prefix?: React.ReactNode | React.ReactNode[];
  suffix?: any;
  size?: 'default' | 'large' | 'xl';
  gap?: 'small' | 'default' | 'large';
  label?: string;
  maxLength?: number;
  selected?: boolean;
};

const ListItem = ({
  children,
  isDivider = false,
  prefix,
  suffix,
  gap = 'default',
  size = 'default',
  label,
  maxLength,
  selected = false,
  ...props
}: ListProps) => {
  return (
    <div
      // Doesn't properly work without those two properties with LogRocket
      // role="button"
      // tabIndex={0}
      className={cn(
        'gap-4',
        'flex w-full flex-row flex-nowrap items-center px-4 py-2',
        size === 'default'
          ? 'h-[48px]'
          : size === 'large'
          ? 'h-[56px]'
          : 'h-[64px]',
        isDivider ? 'border-b border-tertiary-step-800' : '',
        // remove outline
        'focus:outline-none focus:ring-0',
        selected
          ? 'bg-primary-step-100'
          : !selected && 'focus:bg-tertiary-shade',
      )}
      {...props}>
      <div
        className={cn(
          'flex w-full flex-row flex-nowrap items-center',
          gap === 'small' ? 'gap-2' : gap === 'default' ? 'gap-4' : 'gap-6',
        )}>
        {prefix && (
          <div className="flex flex-row flex-nowrap items-center gap-2">
            {prefix}
          </div>
        )}
        <div className="line-clamp-1 flex w-full flex-1 flex-col flex-nowrap gap-1 text-body leading-caption-sm text-secondary-default">
          {typeof children === 'string' && maxLength
            ? children.length > maxLength
              ? children.slice(0, maxLength) + '...'
              : children
            : children}
          {label && (
            <span className="text-caption-sm text-secondary-step-800">
              {label}
            </span>
          )}
        </div>
        {suffix && (
          <div className="flex flex-row flex-nowrap items-center gap-2">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;

const ListSkeleton = ({
  size = 'default',
  ...props
}: {
  size?: 'default' | 'large' | 'xl';
} & ComponentProps<typeof Skeleton>) => {
  return (
    <Skeleton
      height={size === 'default' ? 48 : size === 'large' ? 56 : 64}
      className={'ion-padding-start ion-padding-end m-0'}
      {...props}
    />
  );
};

export { ListSkeleton };
