import * as moment from "moment";

const SideNavItems = [
    {
        isActive: true,
        url: 'dashboard',
        text: 'Dashboard',
        icon: 'bar-chart'
    },
    {
        isActive: false,
        url: 'calendar',
        text: 'Calendar',
        icon: 'calendar'
    },
    {
        isActive: false,
        url: 'cases/new',
        text: 'New Case',
        icon: 'user'
    },
    {
        isActive: false,
        url: 'cases',
        text: 'Clients & Cases',
        icon: 'comments-o'
    },
    {
        isActive: false,
        url: 'cases/activities/'+ moment(new Date).format('DD-MM-YYYY'),
        text: 'Case Activities',
        icon: 'edit'
    },
    {
        isActive: false,
        url: 'tasks',
        text: 'Tasks',
        icon: 'calendar-check-o'
    },
    {
        isActive: false,
        url: 'keydates',
        text: 'Key Dates',
        icon: 'calendar'
    },
    {
        isActive: false,
        url: 'contacts',
        text: 'Contact Book',
        icon: 'phone-square'
    },
    {
        isActive: false,
        url: 'receipts',
        text: 'Receipt Book',
        icon: 'money'
    },
    {
        isActive: false,
        url: 'accounts',
        text: 'Accounts',
        icon: 'calculator'
    },
    {
        isActive: false,
        url: 'logs',
        text: 'Log Book',
        icon: 'pencil-square-o'
    },
    {
        isActive: false,
        url: 'reports',
        text: 'Reports',
        icon: 'line-chart'
    },
]

export default SideNavItems;