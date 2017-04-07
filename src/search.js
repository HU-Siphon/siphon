export default {
  options: {
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'name',
        weight: 0.6
      },
      {
        name: 'link',
        weight: 0.1
      },
      {
        name: 'terms',
        weight: 0.3
      }
    ]
  },
  links: [
    {
      name: 'Financial info',
      link: '/content/finance',
      type: 'ROUTER',
      terms: [
        'Account',
        'Balance',
        'CASHNet'
      ]
    },
    {
      name: 'Financial aid',
      link: '/content/financial_aid',
      type: 'ROUTER'
    },
    {
      name: 'Dorm information',
      link: '/content/dorm',
      type: 'ROUTER',
      terms: [
        'Sign out',
        'Housing'
      ]
    },
    {
      name: 'Privileged housing status',
      link: '/content/privileged_housing',
      type: 'ROUTER',
      terms: [
        'Dorm'
      ]
    },
    {
      name: 'Important dates',
      link: '/content/important_dates',
      type: 'ROUTER',
      terms: [
        'Finals',
        'Schedule'
      ]
    },
    {
      name: 'Microsoft office for students',
      link: '/content/microsoft_office',
      type: 'ROUTER',
      terms: [
        'Word',
        'PowerPoint',
        'Excel'
      ]
    },
    {
      name: 'Campus box',
      link: '/content/campus_box',
      type: 'ROUTER',
      terms: [
        'Mail',
        'Post office'
      ]
    },
    {
      name: 'Chapel information',
      link: '/content/chapel',
      type: 'ROUTER'
    },
    {
      name: 'Schedule planner',
      link: '/content/schedule_planner',
      type: 'ROUTER'
    },
    {
      name: 'Schedule viewer by week',
      link: '/content/schedule_by_week',
      type: 'ROUTER'
    },
    {
      name: 'Enrolled classes',
      link: '/content/enrolled_classes',
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
      type: 'ROUTER',
      terms: [
        'Bookstore'
      ]
    },
    {
      name: 'Testing Lab',
      link: '/content/testing_lab',
      type: 'ROUTER'
    },
    {
      name: 'Public safety',
      link: 'http://www.harding.edu/public-safety',
      type: 'EXTERNAL'
    },
    {
      name: 'Parking registration',
      link: 'http://www.harding.edu/public-safety/parking-registration',
      type: 'EXTERNAL'
    },
    {
      name: 'Registrar',
      link: 'http://www.harding.edu/registrar',
      type: 'EXTERNAL'
    },
    {
      name: 'Bookstore',
      link: 'http://hubookstore.harding.edu/home.aspx',
      type: 'EXTERNAL'
    },
    {
      name: 'Career search',
      link: 'http://www.harding.edu/academics/academic-support/career/jobsearch',
      type: 'EXTERNAL',
      terms: [
        'Bison'
      ]
    },
    {
      name: 'Counseling center',
      link: 'http://www.harding.edu/academics/colleges-departments/bible-ministry/centers/christian-counseling/counseling-center',
      type: 'EXTERNAL'
    },
    {
      name: 'Health services',
      link: 'http://www.harding.edu/student-life/healthservices',
      type: 'EXTERNAL'
    },
    {
      name: 'Harding Homepage',
      link: 'http://www.harding.edu/',
      type: 'EXTERNAL'
    },
    {
      name: 'Pipeline',
      link: 'https://pipeline-old.harding.edu',
      type: 'EXTERNAL'
    },
    {
      name: 'New Pipeline',
      link: 'https://pipeline.harding.edu',
      type: 'EXTERNAL'
    },
    {
      name: 'Canvas',
      link: 'https://harding.instructure.com/',
      type: 'EXTERNAL'
    },
    {
      name: 'Computer science portal',
      link: 'http://cs.harding.edu/',
      type: 'EXTERNAL'
    },
    {
      name: 'EASEL',
      link: 'https://cs.harding.edu/easel/cgi-bin/index',
      type: 'EXTERNAL'
    },
    {
      name: 'Microsoft IMAGINE',
      link: 'http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=5bbb0d2d-3770-e011-971f-0030487d8897&vsro=8&JSEnabled=1',
      type: 'EXTERNAL'
    },
    {
      name: 'Campus Dish',
      link: 'https://harding.campusdish.com/',
      terms: [
        'Cafeteria',
        'Meal'
      ],
      type: 'EXTERNAL'
    },
    {
      name: 'SafeConnect Dashboard',
      link: 'https://10.5.1.1:8443/dashboard.do',
      terms: [
        'DormNet'
      ],
      type: 'EXTERNAL'
    },
    {
      name: 'Q Ware',
      link: 'https://www2.quecentre.com/harding/Login.aspx?ReturnUrl=%2fharding%2fDashboard.aspx',
      terms: [
        'DormNet'
      ],
      type: 'EXTERNAL'
    },
    {
      name: 'Harding Wiki',
      link: 'https://kenobi.harding.edu/dashboard.action',
      terms: [
        'Kenobi',
        'DormNet'
      ],
      type: 'EXTERNAL'
    },
    {
      name: 'Password change',
      link: 'https://password.harding.edu/',
      terms: [
        'DormNet'
      ],
      type: 'EXTERNAL'
    },
    {
      name: 'Teleinfo',
      link: 'http://misnet.harding.edu/teleinfo',
      terms: [
        'DormNet'
      ],
      type: 'EXTERNAL'
    },
    {
      name: 'DormNet blog',
      link: 'http://dormnet.blogspot.com/',
      type: 'EXTERNAL'
    },
    {
      name: 'Harding library',
      link: 'https://www.harding.edu/library',
      type: 'EXTERNAL'
    },
    {
      name: 'Harding Gmail',
      link: 'https://pipeline.harding.edu/email',
      type: 'EXTERNAL'
    }
  ]
}
