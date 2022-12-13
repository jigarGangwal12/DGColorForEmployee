import { RowNode } from "ag-grid-community";

export class CommonFunctions {

    sideBar = {
        toolPanels: [
            {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
                minWidth: 180,
                maxWidth: 400,
                width: 250,
            },
            {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                minWidth: 225,
                width: 225,
                maxWidth: 225,
            },
        ],
    };

    currencyFormatterIN(value: any) {
        var sansDec = value;
        if (value == 0 || value == null) {
            return '';
        }
        let temp = new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }).format(sansDec);
        return `${temp}`;
    }

    currencyFormatterIN4(value: any) {
        var sansDec = value;
        if (value == 0 || value == null) {
            return '';
        }
        let temp = new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 4,
            minimumFractionDigits: 4
        }).format(sansDec);
        return `${temp}`;
    }
    
    currencyFormatterIN0(value: any) {
        var sansDec = value;
        if (value == 0 || value == null) {
            return '';
        }
        let temp = new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        }).format(sansDec);
        return `${temp}`;
    }


    currencyFormatterUS(value: any, dat?: any) {
        var sansDec = value;
        if (dat == 'Rate') {
            if (value == 0 || value == null) {
                return '';
            } else {
                let temp = new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                }).format(sansDec);
                return `${temp}`;
            }
        }
        else {
            if (value == 0 || value == null) {
                return '';
            } else {
                let temp = new Intl.NumberFormat("en-US", {
                }).format(sansDec);
                return `${temp}`;
            }
        }
    }

    currencyFormatterINR(params: any) {
        var sansDec = params;
        if (params && params.value == 0) {
            return '';
        } else {
            var inrFormat = new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(sansDec);
            return `${inrFormat}`;
        }
    }

    currencyFormatter(value: any) {
        var sansDec = value;
        let temp = new Intl.NumberFormat("en-IN").format(sansDec);
        return `${temp}`;
    }

    DateFormatter(params: any) {
        if (params && params.value) {
            if (params.value !== '01/01/1753') {
                return params.value
                    ? new Date(params.value).toLocaleDateString('en-JM', {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                    }) : '';
            }
        }
        return '';
    }

    DateFormatter2(data: any) {
        if (data.value !== '1753-01-01T00:00:00') {
            return data.value
                ? new Date(data.value).toLocaleDateString('en-JM', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                })
                : '';
        }
        return '';
    }

    DateFormatter3(data: any) {
        if (data.value !== '1753-01-01T00:00:00') {
            return data.value
                ? new Date(data.value).toLocaleDateString('nl-NL', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                })
                : '';
        }
        return '';
    }

    DateTimeFormatter(params: any) {
        if (params.value !== '01/01/1753') {
            return params.value
                ? new Date(params.value).toLocaleDateString('en-JM', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }) : '';
        }
        return '';
    }

    AddTotalInAGGridFooter(gridColumnApi: any, gridApi: any, columnName: any) {
        return this.generatePinnedBottomData(gridColumnApi, gridApi, columnName);
    }

    generatePinnedBottomData(gridColumnApi: any, gridApi: any, columnName: any) {
        let result = {};
        gridColumnApi.getAllGridColumns().forEach((item: any) => {
            result[item.colId] = null;
        });
        return this.calculatePinnedBottomData(result, gridApi, columnName);
    }

    calculatePinnedBottomData(target: any, gridApi: any, columnName: string[]) {
        columnName.forEach((element) => {
            gridApi.forEachNode((rowNode: RowNode) => {
                if (rowNode.data) {
                    if (rowNode.data[element]) {
                        target[element] += Number(rowNode.data[element]);
                    }
                }
            });
        });
        return target;
    }

    onFilterTextBoxChanged(gridApi: any, textBoxID: any) {
        return gridApi.setQuickFilter((document.getElementById(textBoxID) as any).value);
    }
}
