var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "750",
        "ok": "301",
        "ko": "449"
    },
    "minResponseTime": {
        "total": "118",
        "ok": "210",
        "ko": "118"
    },
    "maxResponseTime": {
        "total": "3075",
        "ok": "1949",
        "ko": "3075"
    },
    "meanResponseTime": {
        "total": "444",
        "ok": "408",
        "ko": "469"
    },
    "standardDeviation": {
        "total": "401",
        "ok": "177",
        "ko": "495"
    },
    "percentiles1": {
        "total": "319",
        "ok": "350",
        "ko": "257"
    },
    "percentiles2": {
        "total": "472",
        "ok": "455",
        "ko": "503"
    },
    "percentiles3": {
        "total": "1443",
        "ok": "713",
        "ko": "1680"
    },
    "percentiles4": {
        "total": "2061",
        "ok": "950",
        "ko": "2150"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 293,
        "percentage": 39
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 449,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "46.875",
        "ok": "18.812",
        "ko": "28.062"
    }
},
contents: {
"req_main-page-0745d": {
        type: "REQUEST",
        name: "main page",
path: "main page",
pathFormatted: "req_main-page-0745d",
stats: {
    "name": "main page",
    "numberOfRequests": {
        "total": "750",
        "ok": "301",
        "ko": "449"
    },
    "minResponseTime": {
        "total": "118",
        "ok": "210",
        "ko": "118"
    },
    "maxResponseTime": {
        "total": "3075",
        "ok": "1949",
        "ko": "3075"
    },
    "meanResponseTime": {
        "total": "444",
        "ok": "408",
        "ko": "469"
    },
    "standardDeviation": {
        "total": "401",
        "ok": "177",
        "ko": "495"
    },
    "percentiles1": {
        "total": "319",
        "ok": "350",
        "ko": "257"
    },
    "percentiles2": {
        "total": "473",
        "ok": "455",
        "ko": "503"
    },
    "percentiles3": {
        "total": "1443",
        "ok": "713",
        "ko": "1680"
    },
    "percentiles4": {
        "total": "2061",
        "ok": "950",
        "ko": "2150"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 293,
        "percentage": 39
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 449,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "46.875",
        "ok": "18.812",
        "ko": "28.062"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
