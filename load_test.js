import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// test parameters
const BASE_URL = 'http://15.222.61.177:3000'; // Update with the EC2 IP
const PAYLOAD_SIZES = {
    small: 'x'.repeat(1024), // 1KB
    medium: 'x'.repeat(1024 * 1024), // 1MB
    large: 'x'.repeat(1024 * 1024 * 1024) // 1GB
};
// test scenarios
//for now, these snerarios would focus on "soak testing" since were keeping the webserver under pressure for a full minute
//for spike testing we could maybe adjust the scenarios so they only last for a few seconds
export let options = {
    //note that each "executor" has different options. The options used hre are for the "constant-arrival-rate" executor 
    scenarios: {
        // baseline: {//this scenario simulates a constant load of 1000 requests per second for 1 minute
        //     executor: 'constant-arrival-rate',
        //     rate: 1000, // 1000 requests per second
        //     timeUnit: '1s',// period of time to apply the "rate" value
        //     duration: '1m', // 1-minute test
        //     preAllocatedVUs: 2,
        //     maxVUs: 10,//this will allow k6 to dynamically scale the number of VUs (virtual users I think) to meet the desired request rate
        //  }
        medium_load: {
            executor: 'constant-arrival-rate',
            rate: 5000, // 5000 requests per second
            timeUnit: '1s',
            duration: '1m',
            preAllocatedVUs: 2,
            maxVUs: 20,
        }
        // heavy_load: {
        //     executor: 'constant-arrival-rate',
        //     rate: 10000, // 10,000 requests per second
        //     timeUnit: '1s',
        //     duration: '1m',
        //     preAllocatedVUs: 2,
        //     maxVUs: 10,
        // }
    }
};

// Define request function
export default function () {
    let payload = PAYLOAD_SIZES.small; // Change to 'medium' or 'large' for different tests

    let params = {
        headers: { 'Content-Type': 'application/json' },
    };

    let res = http.post(`${BASE_URL}/compute`, JSON.stringify({ data: payload }), params);

    // Check if the request was successful
    check(res, {
        'is status 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1); // Small delay before next request
}
