import * as React from 'react';
import Svg, { G, Rect, Path, SvgProps } from 'react-native-svg';

function AppleStoreIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 160 54"
      fill="none"
      {...props}
    >
      <G opacity={0.5}>
        <Rect
          x={0.666669}
          y={0.666669}
          width={158.667}
          height={52.0002}
          rx={8.66669}
          fill="#0C0D10"
        />
        <Path
          d="M108.702 25.601v3.055h-1.915v2.003h1.915v6.807c0 2.324 1.051 3.254 3.696 3.254.465 0 .908-.056 1.295-.122v-1.981c-.332.033-.542.055-.907.055-1.185 0-1.705-.553-1.705-1.815V30.66h2.612v-2.003h-2.612v-3.055h-2.379zM120.432 40.886c3.519 0 5.677-2.358 5.677-6.265 0-3.884-2.169-6.253-5.677-6.253-3.52 0-5.689 2.369-5.689 6.253 0 3.907 2.158 6.265 5.689 6.265zm0-2.114c-2.07 0-3.232-1.516-3.232-4.15 0-2.612 1.162-4.14 3.232-4.14 2.058 0 3.231 1.528 3.231 4.14 0 2.623-1.173 4.15-3.231 4.15zM127.956 40.653h2.379v-7.116c0-1.694 1.273-2.834 3.077-2.834.421 0 1.129.078 1.328.144v-2.346c-.254-.066-.708-.1-1.062-.1-1.572 0-2.911.864-3.254 2.048h-.177v-1.848h-2.291v12.052zM140.649 30.394c1.76 0 2.911 1.228 2.966 3.12h-6.087c.133-1.88 1.361-3.12 3.121-3.12zm2.955 7.006c-.443.94-1.428 1.46-2.867 1.46-1.903 0-3.132-1.339-3.209-3.453v-.132h8.511v-.83c0-3.786-2.026-6.077-5.379-6.077-3.398 0-5.556 2.446-5.556 6.298 0 3.851 2.114 6.22 5.567 6.22 2.756 0 4.682-1.328 5.224-3.486h-2.291zM93.097 36.203c.183 2.96 2.65 4.852 6.32 4.852 3.924 0 6.379-1.985 6.379-5.15 0-2.49-1.4-3.867-4.795-4.658l-1.824-.448c-2.157-.504-3.029-1.181-3.029-2.363 0-1.49 1.354-2.466 3.384-2.466 1.927 0 3.258.952 3.499 2.478h2.501c-.149-2.788-2.604-4.75-5.965-4.75-3.614 0-6.023 1.962-6.023 4.91 0 2.432 1.365 3.878 4.36 4.578l2.133.516c2.191.516 3.155 1.273 3.155 2.535 0 1.468-1.515 2.535-3.58 2.535-2.213 0-3.75-.998-3.969-2.57h-2.546zM68.447 28.401c-1.638 0-3.055.82-3.785 2.192h-.177V28.6h-2.291V44.66h2.38v-5.833h.187c.631 1.273 1.993 2.026 3.708 2.026 3.044 0 4.98-2.402 4.98-6.232 0-3.829-1.936-6.22-5.002-6.22zm-.675 10.316c-1.993 0-3.243-1.572-3.243-4.084 0-2.524 1.25-4.096 3.254-4.096 2.014 0 3.22 1.539 3.22 4.084 0 2.557-1.206 4.096-3.231 4.096zM81.776 28.401c-1.638 0-3.055.82-3.785 2.192h-.177V28.6h-2.291V44.66h2.38v-5.833h.187c.631 1.273 1.993 2.026 3.708 2.026 3.044 0 4.98-2.402 4.98-6.232 0-3.829-1.936-6.22-5.002-6.22zm-.675 10.316c-1.992 0-3.243-1.572-3.243-4.084 0-2.524 1.25-4.096 3.254-4.096 2.014 0 3.22 1.539 3.22 4.084 0 2.557-1.206 4.096-3.231 4.096zM57.924 40.653h2.73L54.678 24.1h-2.765l-5.976 16.553h2.638l1.526-4.393h6.309l1.514 4.393zm-4.76-13.547h.195l2.397 6.997h-5.001l2.409-6.997zM47.535 11.615V19.6h2.883c2.38 0 3.758-1.466 3.758-4.018 0-2.512-1.39-3.967-3.758-3.967h-2.883zm1.24 1.128h1.505c1.654 0 2.634 1.052 2.634 2.856 0 1.832-.963 2.872-2.634 2.872h-1.505v-5.728zM58.396 19.716c1.76 0 2.839-1.178 2.839-3.132 0-1.942-1.085-3.127-2.84-3.127-1.759 0-2.844 1.185-2.844 3.127 0 1.954 1.08 3.132 2.845 3.132zm0-1.057c-1.035 0-1.616-.758-1.616-2.075 0-1.306.581-2.07 1.616-2.07 1.03 0 1.616.764 1.616 2.07 0 1.311-.587 2.075-1.616 2.075zM70.424 13.574h-1.19l-1.073 4.598h-.094l-1.24-4.598h-1.14l-1.24 4.598h-.088l-1.079-4.598h-1.206l1.66 6.026h1.223l1.24-4.438h.093l1.246 4.438h1.234l1.654-6.026zM71.794 19.6h1.19v-3.525c0-.94.56-1.527 1.439-1.527.88 0 1.3.481 1.3 1.45V19.6h1.19v-3.901c0-1.434-.741-2.242-2.086-2.242-.908 0-1.505.404-1.799 1.074h-.088v-.957h-1.146V19.6zM78.787 19.6h1.19v-8.378h-1.19V19.6zM84.451 19.716c1.76 0 2.84-1.178 2.84-3.132 0-1.942-1.085-3.127-2.84-3.127-1.76 0-2.844 1.185-2.844 3.127 0 1.954 1.08 3.132 2.844 3.132zm0-1.057c-1.034 0-1.615-.758-1.615-2.075 0-1.306.58-2.07 1.615-2.07 1.03 0 1.616.764 1.616 2.07 0 1.311-.586 2.075-1.615 2.075zM90.835 18.698c-.647 0-1.117-.316-1.117-.858 0-.531.376-.813 1.206-.869l1.472-.094v.504c0 .747-.664 1.317-1.56 1.317zm-.304 1.002c.791 0 1.45-.343 1.81-.947h.094v.847h1.145v-4.117c0-1.273-.852-2.026-2.363-2.026-1.367 0-2.34.664-2.462 1.7h1.15c.133-.427.593-.67 1.257-.67.813 0 1.234.36 1.234.996v.52l-1.633.094c-1.433.089-2.24.714-2.24 1.798 0 1.102.846 1.805 2.008 1.805zM97.618 19.7c.83 0 1.533-.393 1.892-1.052h.094v.952h1.14v-8.378h-1.19v3.309h-.088c-.326-.664-1.024-1.057-1.848-1.057-1.522 0-2.502 1.206-2.502 3.11 0 1.91.969 3.116 2.502 3.116zm.337-5.158c.996 0 1.622.791 1.622 2.048 0 1.261-.62 2.041-1.622 2.041-1.007 0-1.61-.769-1.61-2.047 0-1.267.609-2.042 1.61-2.042zM108.46 19.716c1.759 0 2.839-1.178 2.839-3.132 0-1.942-1.085-3.127-2.839-3.127-1.76 0-2.845 1.185-2.845 3.127 0 1.954 1.079 3.132 2.845 3.132zm0-1.057c-1.035 0-1.616-.758-1.616-2.075 0-1.306.581-2.07 1.616-2.07 1.029 0 1.616.764 1.616 2.07 0 1.311-.587 2.075-1.616 2.075zM112.873 19.6h1.19v-3.525c0-.94.559-1.527 1.439-1.527s1.301.481 1.301 1.45V19.6h1.189v-3.901c0-1.434-.741-2.242-2.086-2.242-.908 0-1.505.404-1.798 1.074h-.089v-.957h-1.146V19.6zM123.472 12.074V13.6h-.957v1.002h.957v3.403c0 1.162.526 1.627 1.848 1.627.233 0 .454-.027.648-.06v-.991c-.166.016-.271.027-.454.027-.592 0-.852-.276-.852-.907v-3.1h1.306v-1h-1.306v-1.528h-1.19zM127.565 19.6h1.19v-3.52c0-.913.542-1.527 1.516-1.527.841 0 1.289.487 1.289 1.45V19.6h1.19v-3.89c0-1.434-.791-2.247-2.075-2.247-.908 0-1.544.404-1.837 1.079h-.095v-3.32h-1.178V19.6zM137.042 14.47c.88 0 1.455.614 1.483 1.56h-3.043c.066-.94.68-1.56 1.56-1.56zm1.478 3.503c-.222.47-.714.73-1.434.73-.951 0-1.566-.67-1.604-1.726v-.067h4.255v-.415c0-1.892-1.013-3.038-2.689-3.038-1.699 0-2.778 1.223-2.778 3.15 0 1.925 1.057 3.11 2.783 3.11 1.378 0 2.341-.665 2.612-1.744h-1.145zM33.026 27.068a6.651 6.651 0 013.142-5.536 6.838 6.838 0 00-5.322-2.877c-2.239-.235-4.41 1.34-5.55 1.34-1.164 0-2.92-1.317-4.812-1.278a7.145 7.145 0 00-5.964 3.637c-2.579 4.465-.655 11.026 1.815 14.635 1.236 1.767 2.68 3.741 4.57 3.671 1.85-.077 2.54-1.18 4.773-1.18 2.212 0 2.86 1.18 4.788 1.136 1.984-.033 3.235-1.776 4.427-3.56a14.616 14.616 0 002.025-4.123 6.433 6.433 0 01-3.892-5.865zM29.383 16.281a6.497 6.497 0 001.486-4.654 6.61 6.61 0 00-4.276 2.213 6.238 6.238 0 00-1.526 4.482 5.53 5.53 0 004.316-2.04z"
          fill="#fff"
        />
        <Rect
          x={0.666669}
          y={0.666669}
          width={158.667}
          height={52.0002}
          rx={8.66669}
          stroke="#A6A6A6"
          strokeWidth={1.33334}
        />
      </G>
    </Svg>
  );
}

export default AppleStoreIcon;