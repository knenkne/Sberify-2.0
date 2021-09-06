import tw from 'twin.macro';

// TODO: shadows
export const AlbumWrapperStyled = tw.div`pt-24 px-10 pb-10 bg-secondary`;
export const AlbumStyled = tw.div`flex items-end`;
export const CoverWrapperStyled = tw.div`relative w-1/5 h-1/5 flex-shrink-0 rounded-lg overflow-hidden mr-5 shimmer light:shimmer-light`;
export const AlbumInfoStyled = tw.div`relative min-w-0 flex-grow`;
export const TitleStyled = tw.h2`w-full truncate font-archivo font-black text-7xl text-primary`;
export const SubtitleStyled = tw.p`font-medium text-base text-secondary ml-1 -mt-2`;
export const LinkStyled = tw.a`text-secondary duration-300 hover:text-secondary-hover hover:text-shadow`;
