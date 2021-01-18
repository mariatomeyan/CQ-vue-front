import Vue from 'vue';
import Vuex from 'vuex';

import images from './images';

Vue.use(Vuex);

export default function () {
    const Store = new Vuex.Store({
        modules: {
            images
        },
        strict: process.env.DEBUGGING
    });

    return Store;
}
