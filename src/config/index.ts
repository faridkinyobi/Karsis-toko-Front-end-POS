interface Config {
    api_host_dev?: string;
}

const config: Config = {
    api_host_dev: import.meta.env.VITE_APP_HOST_DEV,
};

export { config };
