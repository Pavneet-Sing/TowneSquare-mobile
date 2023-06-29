import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Description2 = (props: SvgProps) => (
  <Svg width={326} height={62} fill="none" {...props}>
    <G fill="#F2F0FF" filter="url(#a)">
      <Path d="M4.574 48V15.924h10.098V48H4.574Zm5.082-36.498c-1.584 0-2.904-.528-3.96-1.584-1.012-1.1-1.518-2.42-1.518-3.96 0-1.584.506-2.904 1.518-3.96C6.752.942 8.072.414 9.656.414s2.882.528 3.894 1.584 1.518 2.376 1.518 3.96c0 1.54-.506 2.86-1.518 3.96-1.012 1.056-2.31 1.584-3.894 1.584ZM40.989 48V29.718c0-1.672-.528-3.014-1.584-4.026-1.012-1.056-2.31-1.584-3.894-1.584-1.1 0-2.068.242-2.904.726-.836.44-1.496 1.1-1.98 1.98-.484.836-.726 1.804-.726 2.904l-3.894-1.914c0-2.508.55-4.708 1.65-6.6a11.134 11.134 0 0 1 4.554-4.356c1.98-1.056 4.202-1.584 6.666-1.584 2.376 0 4.466.572 6.27 1.716 1.848 1.1 3.3 2.574 4.356 4.422 1.056 1.848 1.584 3.872 1.584 6.072V48H40.989Zm-21.186 0V15.924H29.9V48H19.803ZM81.625 48.726c-3.3 0-6.292-.726-8.976-2.178-2.64-1.496-4.73-3.52-6.27-6.072-1.54-2.552-2.31-5.412-2.31-8.58s.77-6.006 2.31-8.514c1.54-2.508 3.63-4.488 6.27-5.94 2.64-1.496 5.632-2.244 8.976-2.244 3.344 0 6.336.726 8.976 2.178 2.64 1.452 4.73 3.454 6.27 6.006 1.54 2.508 2.31 5.346 2.31 8.514 0 3.168-.77 6.028-2.31 8.58-1.54 2.552-3.63 4.576-6.27 6.072-2.64 1.452-5.632 2.178-8.976 2.178Zm0-9.174c1.452 0 2.728-.308 3.828-.924a6.47 6.47 0 0 0 2.508-2.706c.616-1.188.924-2.53.924-4.026s-.308-2.794-.924-3.894c-.616-1.144-1.474-2.024-2.574-2.64-1.056-.66-2.31-.99-3.762-.99-1.408 0-2.662.33-3.762.99-1.1.616-1.958 1.496-2.574 2.64-.616 1.144-.924 2.464-.924 3.96 0 1.452.308 2.772.924 3.96a6.923 6.923 0 0 0 2.574 2.706c1.1.616 2.354.924 3.762.924ZM123.414 48V29.718c0-1.672-.528-3.014-1.584-4.026-1.012-1.056-2.31-1.584-3.894-1.584-1.1 0-2.068.242-2.904.726-.836.44-1.496 1.1-1.98 1.98-.484.836-.726 1.804-.726 2.904l-3.894-1.914c0-2.508.55-4.708 1.65-6.6a11.134 11.134 0 0 1 4.554-4.356c1.98-1.056 4.202-1.584 6.666-1.584 2.376 0 4.466.572 6.27 1.716 1.848 1.1 3.3 2.574 4.356 4.422 1.056 1.848 1.584 3.872 1.584 6.072V48h-10.098Zm-21.186 0V15.924h10.098V48h-10.098ZM153.857 48.726c-3.475 0-6.578-.704-9.306-2.112-2.684-1.452-4.796-3.454-6.336-6.006s-2.31-5.434-2.31-8.646c0-3.212.748-6.072 2.244-8.58a16.585 16.585 0 0 1 6.204-6.006c2.596-1.452 5.523-2.178 8.779-2.178 3.167 0 5.961.682 8.381 2.046a14.655 14.655 0 0 1 5.676 5.676c1.409 2.42 2.112 5.192 2.112 8.316 0 .572-.044 1.188-.132 1.848a16.491 16.491 0 0 1-.33 2.178l-27.654.066v-6.93l23.364-.066-4.356 2.904c-.044-1.848-.33-3.366-.858-4.554-.528-1.232-1.32-2.156-2.376-2.772-1.012-.66-2.266-.99-3.762-.99-1.584 0-2.97.374-4.158 1.122-1.144.704-2.046 1.716-2.706 3.036-.616 1.32-.924 2.926-.924 4.818 0 1.892.33 3.52.99 4.884.704 1.32 1.673 2.354 2.904 3.102 1.276.704 2.772 1.056 4.488 1.056 1.584 0 3.014-.264 4.29-.792 1.276-.572 2.398-1.408 3.366-2.508l5.544 5.544a14.967 14.967 0 0 1-5.742 4.158c-2.244.924-4.707 1.386-7.392 1.386ZM201.264 48.66c-2.156 0-4.136-.418-5.94-1.254-1.804-.836-3.278-1.98-4.422-3.432a9.678 9.678 0 0 1-1.98-5.082v-13.53a10.04 10.04 0 0 1 1.98-5.148c1.144-1.54 2.618-2.75 4.422-3.63 1.804-.88 3.784-1.32 5.94-1.32 3.036 0 5.72.726 8.052 2.178 2.376 1.452 4.224 3.432 5.544 5.94 1.364 2.508 2.046 5.368 2.046 8.58 0 3.212-.682 6.072-2.046 8.58-1.32 2.508-3.168 4.488-5.544 5.94-2.332 1.452-5.016 2.178-8.052 2.178Zm-1.848-9.108c1.452 0 2.706-.33 3.762-.99a6.923 6.923 0 0 0 2.574-2.706c.616-1.144.924-2.442.924-3.894 0-1.496-.308-2.816-.924-3.96-.616-1.144-1.474-2.024-2.574-2.64-1.056-.66-2.288-.99-3.696-.99-1.408 0-2.662.33-3.762.99-1.056.616-1.892 1.496-2.508 2.64-.616 1.144-.924 2.464-.924 3.96 0 1.452.286 2.75.858 3.894a6.923 6.923 0 0 0 2.574 2.706c1.1.66 2.332.99 3.696.99ZM182.784 61.53V15.924h10.098v8.25l-1.65 7.788 1.518 7.788v21.78h-9.966ZM220.056 48V.084h10.098V48h-10.098ZM248.683 48.66c-2.948 0-5.588-.726-7.92-2.178-2.288-1.452-4.114-3.432-5.478-5.94-1.32-2.508-1.98-5.368-1.98-8.58 0-3.212.66-6.072 1.98-8.58 1.364-2.508 3.19-4.488 5.478-5.94 2.332-1.452 4.972-2.178 7.92-2.178 2.156 0 4.092.418 5.808 1.254 1.76.836 3.19 2.002 4.29 3.498 1.1 1.452 1.716 3.124 1.848 5.016v13.86c-.132 1.892-.748 3.586-1.848 5.082-1.056 1.452-2.464 2.596-4.224 3.432-1.76.836-3.718 1.254-5.874 1.254Zm2.046-9.108c2.156 0 3.894-.704 5.214-2.112 1.32-1.452 1.98-3.278 1.98-5.478 0-1.496-.308-2.816-.924-3.96a6.061 6.061 0 0 0-2.508-2.64c-1.056-.66-2.288-.99-3.696-.99-1.408 0-2.662.33-3.762.99-1.056.616-1.914 1.496-2.574 2.64-.616 1.144-.924 2.464-.924 3.96 0 1.452.308 2.75.924 3.894a6.923 6.923 0 0 0 2.574 2.706c1.1.66 2.332.99 3.696.99ZM257.527 48v-8.646l1.518-7.788-1.518-7.788v-7.854h9.9V48h-9.9ZM288.067 48.726c-3.3 0-6.292-.726-8.976-2.178-2.684-1.452-4.796-3.454-6.336-6.006s-2.31-5.412-2.31-8.58c0-3.212.77-6.072 2.31-8.58 1.584-2.552 3.718-4.554 6.402-6.006s5.698-2.178 9.042-2.178c2.508 0 4.796.44 6.864 1.32 2.112.836 3.982 2.112 5.61 3.828l-6.468 6.468a6.858 6.858 0 0 0-2.64-1.848c-.968-.396-2.09-.594-3.366-.594-1.452 0-2.75.33-3.894.99-1.1.616-1.98 1.496-2.64 2.64-.616 1.1-.924 2.398-.924 3.894s.308 2.816.924 3.96a7.26 7.26 0 0 0 2.706 2.706c1.144.66 2.42.99 3.828.99 1.32 0 2.486-.22 3.498-.66a8.13 8.13 0 0 0 2.706-1.98l6.402 6.468c-1.672 1.76-3.564 3.102-5.676 4.026-2.112.88-4.466 1.32-7.062 1.32Z" />
      <Path d="M318.386 48.726c-3.476 0-6.578-.704-9.306-2.112-2.684-1.452-4.796-3.454-6.336-6.006s-2.31-5.434-2.31-8.646c0-3.212.748-6.072 2.244-8.58a16.585 16.585 0 0 1 6.204-6.006c2.596-1.452 5.522-2.178 8.778-2.178 3.168 0 5.962.682 8.382 2.046a14.662 14.662 0 0 1 5.676 5.676c1.408 2.42 2.112 5.192 2.112 8.316 0 .572-.044 1.188-.132 1.848a16.491 16.491 0 0 1-.33 2.178l-27.654.066v-6.93l23.364-.066-4.356 2.904c-.044-1.848-.33-3.366-.858-4.554-.528-1.232-1.32-2.156-2.376-2.772-1.012-.66-2.266-.99-3.762-.99-1.584 0-2.97.374-4.158 1.122-1.144.704-2.046 1.716-2.706 3.036-.616 1.32-.924 2.926-.924 4.818 0 1.892.33 3.52.99 4.884.704 1.32 1.672 2.354 2.904 3.102 1.276.704 2.772 1.056 4.488 1.056 1.584 0 3.014-.264 4.29-.792 1.276-.572 2.398-1.408 3.366-2.508l5.544 5.544a14.967 14.967 0 0 1-5.742 4.158c-2.244.924-4.708 1.386-7.392 1.386Z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default Description2;