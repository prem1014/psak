interface IRoute {
    path: string;
    component: any;
    icon: string;
    displayText?: string;
    float?: string;
    private?: boolean;
    role?: string;
    show?: boolean;
}

export default IRoute;