export default function LifeCycleStatusFilter(context) {

    return {
        name: "LifeCycleStatus",
        values: [
            {
                "DisplayValue": "New",
                "ReturnValue": "N"
            },
            {
                "DisplayValue": "Accepted",
                "ReturnValue": "A"
            },
            {
                "DisplayValue": "Rejected",
                "ReturnValue": "R"
            }
        ]
    };
}