import _ from 'lodash';

export class Solution {
    protected providerOptions: any = {};
    protected options: any = {};
    protected defaultOptions: any = {};

    constructor(providerOptions) {
        this.providerOptions = providerOptions;
    }

    setOptions(options: any = {}) {
        this.options = { ...this.defaultOptions, ...options };
    }

    getOptions() {
        return _.omit({
            ...this.options,
        }, 'initialized');
    }

    checkOptions() {
        return true;
    }

    async initialize(options: any = {}) {
        this.setOptions(options);
        this.options.initialized = true;
    }

    isInitialized() {
        if (!this.options.initialized)
            throw new Error('Nao se esqueça de executar o método "initialized" de cada solução da fábrica');
    }
}