export default {
  links: [
    {
      title: 'Navigation',
      icon: 'fa-compass',
      links: [
        {
          name: 'Dashboard',
          link: '/',
          type: 'ROUTER'
        },
        {
          name: 'Settings',
          link: '/settings',
          type: 'ROUTER'
        }
      ]
    },
    {
      title: 'Personal',
      icon: 'fa-user',
      links: [
        {
          name: 'Chapel',
          link: '/content/chapel',
          type: 'ROUTER'
        },
        {
          name: 'Housing',
          link: '/content/housing',
          type: 'ROUTER'
        }
      ]
    },
    {
      title: 'Student',
      icon: 'fa-graduation-cap',
      links: [
        {
          name: 'Enrolled classes',
          link: '/content/enrolled_classes',
          type: 'ROUTER'
        },
        {
          name: 'Canvas',
          link: 'https://harding.instructure.com/',
          type: 'EXTERNAL'
        },
        {
          name: 'EASEL',
          link: 'https://cs.harding.edu/easel/cgi-bin/index',
          type: 'EXTERNAL'
        }
      ]
    },
    {
      title: 'Registration',
      icon: 'fa-check',
      links: [
        {
          name: 'Schedule planner',
          link: '/content/schedule_planner',
          type: 'ROUTER'
        },
        {
          name: 'Schedule planner cart',
          link: '/content/schedule_planner_cart',
          type: 'ROUTER'
        },
        {
          name: 'Chapel seat selection',
          link: '/content/chapel_seat_selection',
          type: 'ROUTER'
        },
        {
          name: 'Purchase textbooks',
          link: '/content/purchase_textbooks',
          type: 'ROUTER'
        }
      ]
    },
    {
      title: 'Finance',
      icon: 'fa-money',
      links: [
        {
          name: 'Financial info',
          link: '/content/finance',
          type: 'ROUTER'
        }
      ]
    }
  ]
}
