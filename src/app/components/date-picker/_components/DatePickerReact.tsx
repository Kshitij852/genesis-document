"use client";

import React, { useState } from "react";
import { Button } from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { format, startOfToday, subMonths } from "date-fns";
import {
  DateRangePicker,
  MultipleDatePicker,
  SingleDatePicker,
} from "@atomos_tech/genesis-datepicker";
import { DateRange } from "react-day-picker";

const DatePickerReact = () => {
  // Single date picker
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Multiple date picker
  const [multiDate, setMultiDate] = useState<Date[] | undefined>(undefined);

  // Date range picker
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const handleRangeSelect = (range: DateRange | undefined) => {
    setSelectedRange(range);
  };

  const applyPreset = (
    preset: "today" | "last1Months" | "last3Months" | "last6Months"
  ) => {
    let fromDate;
    const toDate = new Date(); // End date is always today

    switch (preset) {
      case "today":
        fromDate = startOfToday();
        break;
      case "last1Months":
        fromDate = subMonths(toDate, 1);
        break;
      case "last3Months":
        fromDate = subMonths(toDate, 3);
        break;
      case "last6Months":
        fromDate = subMonths(toDate, 6);
        break;
      default:
        return;
    }

    setSelectedRange({ from: fromDate, to: toDate });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mt-3">
          Date Picker Components
        </h1>
        <p className="text-gray-600">
          Interactive date selection components with various configurations
        </p>
      </div>

      {/* Single & Multiple Date Pickers - Same Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Single Date Picker */}
        <section className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-2 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div> */}
            <h2 className="text-lg font-semibold text-gray-900">
              Single Date Picker
            </h2>
          </div>

          <div className="space-y-4">
            <SingleDatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              position="bottom-left"
              footer={
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Selected:{" "}
                    <span className="font-medium text-xs text-gray-900">
                      {selectedDate ? format(selectedDate, "MM/dd/yyyy") : "-"}
                    </span>
                  </p>
                  {selectedDate && (
                    <Button
                      onClick={() => setSelectedDate(undefined)}
                      className="px-1.5 py-1 text-xs"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              }
            />

            <CodeSnippet
              title="Single Date Picker - React"
              code={`import { useState } from "react";
import { SingleDatePicker } from "@atomos_tech/genesis-datepicker";
import { format } from "date-fns";

const SingleDatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <SingleDatePicker
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      position="bottom-left"
      footer={
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Selected:{" "}
            <span className="font-medium text-gray-900">
              {selectedDate ? format(selectedDate, "MM/dd/yyyy") : "-"}
            </span>
          </p>
          {selectedDate && (
            <button
              onClick={() => setSelectedDate(undefined)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>
      }
    />
  );
};`}
            />
          </div>
        </section>

        {/* Multiple Date Picker */}
        <section className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-2 bg-purple-50 rounded-lg">
              <CalendarDays className="w-5 h-5 text-purple-600" />
            </div> */}
            <h2 className="text-lg font-semibold text-gray-900">
              Multiple Date Picker
            </h2>
          </div>

          <div className="space-y-4">
            <MultipleDatePicker
              selectedDate={multiDate}
              setSelectedDate={setMultiDate}
              dateFormat="MMM dd, yyyy"
              disabledCalendar={{ after: new Date() }}
              endMonth={new Date()}
              hideWeekdays
              placeholder="Select Multiple Dates"
              startMonth={new Date(new Date().getFullYear() - 10, 12)}
              position="bottom-left"
              footer={
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Selected:{" "}
                    <span className="font-medium text-gray-900">
                      {multiDate?.length || 0} dates
                    </span>
                  </p>
                  <Button
                    onClick={() => setMultiDate(undefined)}
                    variant="outlined"
                    intent="primary-outlined"
                    className="px-1.5 py-1 text-xs"
                  >
                    Reset
                  </Button>
                </div>
              }
            />

            {multiDate && multiDate.length > 0 && (
              <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-xs font-medium text-purple-800 mb-1">
                  Selected Dates ({multiDate.length}):
                </p>
                <div className="flex flex-wrap gap-1">
                  {multiDate.slice(0, 3).map((date, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white rounded border border-purple-200 text-purple-700 text-xs"
                    >
                      {format(date, "MMM dd")}
                    </span>
                  ))}
                  {multiDate.length > 3 && (
                    <span className="px-2 py-1 bg-purple-100 rounded text-purple-700 text-xs">
                      +{multiDate.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            <CodeSnippet
              title="Multiple Date Picker - React"
              code={`import { useState } from "react";
import { MultipleDatePicker, Button } from "@atomos_tech/genesis-datepicker";

const MultipleDatePickerExample = () => {
  const [multiDate, setMultiDate] = useState<Date[] | undefined>(undefined);

  return (
    <MultipleDatePicker
      selectedDate={multiDate}
      setSelectedDate={setMultiDate}
      dateFormat="MMM dd, yyyy"
      disabledCalendar={{ after: new Date() }}
      endMonth={new Date()}
      hideWeekdays
      placeholder="Select Multiple Dates"
      startMonth={new Date(new Date().getFullYear() - 10, 12)}
      position="bottom-left"
      footer={
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Selected: <span className="font-medium text-gray-900">{multiDate?.length || 0} dates</span>
          </p>
          <Button
            size="xs"
            onClick={() => setMultiDate(undefined)}
            variant="outlined"
            intent="default-outlined"
            className="text-gray-700 border-gray-300 hover:bg-gray-50"
          >
            Reset
          </Button>
        </div>
      }
    />
  );
};`}
            />
          </div>
        </section>
      </div>

      {/* Date Range Pickers - Full Width Below */}
      <section className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="flex items-center gap-3 mb-6">
          {/* <div className="p-2 bg-green-50 rounded-lg">
            <CalendarRange className="w-5 h-5 text-green-600" />
          </div> */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Date Range Pickers
            </h2>
            <p className="text-sm text-gray-600">
              Select date ranges with or without preset options
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Date Range Picker */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Basic Range Picker</h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <DateRangePicker
                selectedRange={selectedRange}
                setSelectedRange={setSelectedRange}
                rangeFormat="MMM dd, yyyy"
                disabledCalendar={{ after: new Date() }}
                endMonth={new Date()}
                hideWeekdays
                handleRangeSelect={handleRangeSelect}
                placeholder="Select Range"
                startMonth={new Date(new Date().getFullYear() - 10, 12)}
                position="bottom-left"
              />

              {selectedRange?.from && selectedRange?.to && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                  <p className="text-sm font-medium text-green-800">
                    Selected Range:
                  </p>
                  <p className="text-green-700 text-sm">
                    {format(selectedRange.from, "MMM dd, yyyy")} -{" "}
                    {format(selectedRange.to, "MMM dd, yyyy")}
                  </p>
                </div>
              )}
            </div>

            <CodeSnippet
              title="Date Range Picker - React"
              code={`import { useState } from "react";
import { DateRangePicker } from "@atomos_tech/genesis-datepicker";

interface DateRange {
  from: Date;
  to: Date;
}

const DateRangePickerExample = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const handleRangeSelect = (range: DateRange | undefined) => {
    setSelectedRange(range);
  };

  return (
    <DateRangePicker
      selectedRange={selectedRange}
      setSelectedRange={setSelectedRange}
      rangeFormat="MMM dd, yyyy"
      disabledCalendar={{ after: new Date() }}
      endMonth={new Date()}
      hideWeekdays
      handleRangeSelect={handleRangeSelect}
      placeholder="Select Range"
      startMonth={new Date(new Date().getFullYear() - 10, 12)}
      position="bottom-left"
    />
  );
};`}
            />
          </div>

          {/* Date Range Picker with Presets */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">
              Range Picker with Presets
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <DateRangePicker
                selectedRange={selectedRange}
                setSelectedRange={setSelectedRange}
                rangeFormat="MMM dd, yyyy"
                disabledCalendar={{ after: new Date() }}
                hideWeekdays
                placeholder="Select Range"
                startMonth={new Date(new Date().getFullYear() - 10, 12)}
                position="top-left"
              >
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Quick Presets:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
                      onClick={() => applyPreset("today")}
                    >
                      Today
                    </button>
                    <button
                      className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
                      onClick={() => applyPreset("last1Months")}
                    >
                      Last 1 Month
                    </button>
                    <button
                      className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
                      onClick={() => applyPreset("last3Months")}
                    >
                      Last 3 Months
                    </button>
                    <button
                      className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
                      onClick={() => applyPreset("last6Months")}
                    >
                      Last 6 Months
                    </button>
                  </div>
                </div>
              </DateRangePicker>
            </div>

            {selectedRange?.from && selectedRange?.to && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {/* <div className="p-2 bg-blue-100 rounded-lg">
                    <CalendarRange className="w-4 h-4 text-blue-600" />
                  </div> */}
                  <div>
                    <p className="font-medium text-blue-900 text-sm">
                      Active Range
                    </p>
                    <p className="text-blue-700 text-sm">
                      {format(selectedRange.from, "MMM dd, yyyy")} -{" "}
                      {format(selectedRange.to, "MMM dd, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <CodeSnippet
              title="Date Range Picker with Presets - React"
              code={`import { useState } from "react";
import { DateRangePicker } from "@atomos_tech/genesis-datepicker";
import { startOfToday, subMonths } from "date-fns";

interface DateRange {
  from: Date;
  to: Date;
}

const DateRangePickerWithPresetsExample = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const applyPreset = (
    preset: "today" | "last1Months" | "last3Months" | "last6Months"
  ) => {
    let fromDate;
    const toDate = new Date();

    switch (preset) {
      case "today":
        fromDate = startOfToday();
        break;
      case "last1Months":
        fromDate = subMonths(toDate, 1);
        break;
      case "last3Months":
        fromDate = subMonths(toDate, 3);
        break;
      case "last6Months":
        fromDate = subMonths(toDate, 6);
        break;
      default:
        return;
    }

    setSelectedRange({ from: fromDate, to: toDate });
  };

  return (
    <DateRangePicker
      selectedRange={selectedRange}
      setSelectedRange={setSelectedRange}
      rangeFormat="MMM dd, yyyy"
      disabledCalendar={{ after: new Date() }}
      hideWeekdays
      placeholder="Select Range"
      startMonth={new Date(new Date().getFullYear() - 10, 12)}
      position="top-left"
    >
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3">Quick Presets:</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
            onClick={() => applyPreset("today")}
          >
            Today
          </button>
          <button
            className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
            onClick={() => applyPreset("last1Months")}
          >
            Last 1 Month
          </button>
          <button
            className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
            onClick={() => applyPreset("last3Months")}
          >
            Last 3 Months
          </button>
          <button
            className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
            onClick={() => applyPreset("last6Months")}
          >
            Last 6 Months
          </button>
        </div>
      </div>
    </DateRangePicker>
  );
};`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatePickerReact;
