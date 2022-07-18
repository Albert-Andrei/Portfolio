export const NextLight: React.FC = () => {
  return (
    <g fill="none">
      <g filter="url(#filter0_di_325_45)">
        <circle cx="108" cy="105" r="91" fill="#FBFBFB" />
      </g>
      <path
        d="M79.3787 86.2533H101.259V87.9934H81.3788V101.082H100.071V102.82H81.3788V117.191H101.484V118.931H79.3787V86.2533ZM103.219 86.2533H105.539L115.841 100.625L126.373 86.2533L140.696 68L117.164 102.135L129.289 118.931H126.874L115.841 103.646L104.764 118.931H102.395L114.611 102.135L103.219 86.2533ZM130.159 87.9934V86.2533H155.09V87.9934H143.603V118.931H141.598V87.9934H130.159ZM52 86.2533H54.5082L89.0796 137.994L74.7916 118.938L54.0882 88.7243L53.9954 118.931H52V86.2533ZM154.888 116.667C154.744 116.669 154.602 116.628 154.48 116.55C154.359 116.471 154.264 116.358 154.207 116.225C154.15 116.092 154.134 115.946 154.161 115.803C154.188 115.661 154.256 115.53 154.357 115.427C154.459 115.324 154.589 115.254 154.73 115.225C154.872 115.196 155.019 115.209 155.153 115.264C155.287 115.319 155.401 115.412 155.482 115.532C155.562 115.652 155.605 115.794 155.605 115.938C155.608 116.034 155.592 116.129 155.557 116.218C155.522 116.307 155.469 116.388 155.402 116.456C155.335 116.524 155.255 116.578 155.167 116.614C155.079 116.65 154.984 116.668 154.888 116.667ZM156.861 114.753H157.933C157.933 114.888 157.962 115.022 158.016 115.146C158.071 115.269 158.151 115.38 158.251 115.472C158.351 115.563 158.468 115.633 158.596 115.676C158.725 115.72 158.86 115.736 158.995 115.725C159.691 115.725 160.088 115.305 160.088 114.518V109.534H161.181V114.523C161.181 115.938 160.362 116.755 159.007 116.755C157.733 116.755 156.861 115.964 156.861 114.753ZM162.61 114.688H163.694C163.786 115.358 164.441 115.783 165.383 115.783C166.26 115.783 166.905 115.319 166.905 114.704C166.905 114.166 166.494 113.843 165.564 113.623L164.654 113.405C163.383 113.105 162.798 112.49 162.798 111.456C162.798 110.198 163.824 109.367 165.35 109.367C166.78 109.367 167.824 110.203 167.889 111.391H166.824C166.722 110.741 166.155 110.335 165.336 110.335C164.473 110.335 163.898 110.75 163.898 111.386C163.898 111.89 164.269 112.177 165.186 112.393L165.961 112.583C167.404 112.92 168 113.511 168 114.567C168 115.915 166.956 116.76 165.288 116.76C163.738 116.755 162.689 115.948 162.61 114.688Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_di_325_45"
          x="0"
          y="0"
          width="216"
          height="216"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_325_45"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_325_45"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_325_45"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_325_45"
          />
        </filter>
      </defs>
    </g>
  );
};