import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import type { FC } from 'react'
import React from 'react'

const LinkedIn: FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_8_264)">
        <path
          d="M12 9.55C12.917 8.613 14.111 8 15.5 8C16.9587 8 18.3576 8.57946 19.3891 9.61091C20.4205 10.6424 21 12.0413 21 13.5V21H19V13.5C19 12.5717 18.6313 11.6815 17.9749 11.0251C17.3185 10.3687 16.4283 10 15.5 10C14.5717 10 13.6815 10.3687 13.0251 11.0251C12.3687 11.6815 12 12.5717 12 13.5V21H10V8.5H12V9.55ZM5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5ZM4 8.5H6V21H4V8.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_264">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  )
}

export default LinkedIn
