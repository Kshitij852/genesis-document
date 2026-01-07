"use client";

import React, { useState } from "react";
import { Button } from "@atomos_tech/genesis";
import CodeSnippet from "../../button/_components/CodeSnippet";
import { format, startOfToday, subMonths } from "date-fns";
import { DateRange } from "react-day-picker";

import { Input } from "@atomos_tech/genesis";
import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { DayPicker, DropdownProps, PropsSingle, PropsMulti, PropsRange } from "react-day-picker";

// Utility function
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// ============ Single Date Picker Component ============
interface DatePickerProps {
  placeholder?: string;
  selectedDate: Date | undefined;
  setSelectedDate: Dispatch<SetStateAction<Date | undefined>>;
  footer?: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  disabledCalendar?: { before: Date } | { after: Date };
  dateFormat?: string;
  disabled?: boolean;
  hideWeekdays?: boolean;
  endMonth?: Date | undefined;
  startMonth?: Date | undefined;
  timeZone?: string | undefined;
}

const SingleDatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      placeholder = "DD/MM/YYYY",
      selectedDate,
      setSelectedDate,
      footer,
      position = "bottom-right",
      disabledCalendar,
      dateFormat,
      disabled,
      hideWeekdays,
      endMonth,
      startMonth,
      timeZone = "Asia/Kolkata",
    },
    ref
  ) => {
    const [isPopperOpen, setIsPopperOpen] = useState(false);
    const popperRef = useRef<HTMLDivElement>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

    const closePopper = () => setIsPopperOpen(false);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          popperElement &&
          !popperElement.contains(event.target as Node) &&
          !popperRef.current?.contains(event.target as Node)
        ) {
          closePopper();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [popperElement]);

    const formatSelectedDate = (date?: Date, dateFormat?: string) => {
      if (!date) return "";
      return format(date, dateFormat || "dd/MM/yyyy");
    };

    function CustomSelectDropdown(props: DropdownProps) {
      const { options, value, onChange } = props;

      const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(event);
      };

      return (
        <select
          className="border p-1 shadow rounded-md mb-3 outline-none mx-1"
          value={value?.toString()}
          onChange={handleValueChange}
        >
          {options?.map((option) => (
            <option
              key={option.value}
              value={option.value.toString()}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    const handleDaySelect: PropsSingle["onSelect"] = (date) => {
      if (date) {
        setSelectedDate(date);
        closePopper();
      }
    };

    return (
      <div className="relative w-full">
        <div ref={popperRef}>
          <Input
            type="text"
            readOnly
            ref={ref}
            className="w-full main-shadow"
            placeholder={placeholder || format(new Date(), "dd/mm/yyyy")}
            aria-label="Pick a date"
            value={formatSelectedDate(selectedDate, dateFormat)}
            onClick={() => setIsPopperOpen(true)}
            disabled={disabled}
          />
        </div>

        {isPopperOpen && (
          <div
            tabIndex={-1}
            className={cn(
              "text-[16px] shadow-sm border border-primary-600 bg-white rounded-md",
              "mt-1 mx-auto z-[1000] transition-all absolute duration-75 delay-100 ease-in-out",
            //   {
            //     "bottom-11 right-0": position === "top-right",
            //     "bottom-11 left-0": position === "top-left",
            //     "top-10 right-0": position === "bottom-right" || !position,
            //     "top-10 left-0": position === "bottom-left",
            //   }
            )}
            ref={(element) => setPopperElement(element)}
            role="dialog"
            aria-label="Single DayPicker calendar"
          >
            <DayPicker
              mode="single"
              hideNavigation
              hideWeekdays={hideWeekdays}
              showOutsideDays
              startMonth={startMonth}
              endMonth={
                endMonth
                  ? endMonth
                  : new Date(new Date().getFullYear() + 100, 12)
              }
              selected={selectedDate}
              defaultMonth={selectedDate || new Date()}
              disabled={disabledCalendar}
              components={{ Dropdown: CustomSelectDropdown }}
              captionLayout="dropdown"
              timeZone={timeZone}
              onSelect={handleDaySelect}
              modifiersStyles={{
                selected: {
                  backgroundColor: "var(--primary-500)",
                  color: "white",
                  borderRadius: "5px",
                },
              }}
              footer={footer}
            />
          </div>
        )}
      </div>
    );
  }
);

SingleDatePicker.displayName = "DatePicker";

// ============ Multiple Date Picker Component ============
interface MultipleDatePickerProps {
  placeholder?: string;
  selectedDate: Date[] | undefined;
  setSelectedDate: Dispatch<SetStateAction<Date[] | undefined>>;
  footer?: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  disabledCalendar?: { before: Date } | { after: Date };
  dateFormat?: string;
  disabled?: boolean;
  hideWeekdays?: boolean;
  endMonth?: Date | undefined;
  startMonth?: Date | undefined;
  timeZone?: string | undefined;
  max?: number | undefined;
  min?: number | undefined;
}

const MultipleDatePicker = forwardRef<HTMLInputElement, MultipleDatePickerProps>(
  (
    {
      placeholder = "DD/MM/YYYY",
      selectedDate,
      setSelectedDate,
      footer,
      position = "bottom-right",
      disabledCalendar,
      dateFormat,
      disabled,
      hideWeekdays,
      endMonth,
      startMonth,
      timeZone = "Asia/Kolkata",
      min,
      max,
    },
    ref
  ) => {
    const [isPopperOpen, setIsPopperOpen] = useState(false);
    const popperRef = useRef<HTMLDivElement>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

    const closePopper = () => setIsPopperOpen(false);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          popperElement &&
          !popperElement.contains(event.target as Node) &&
          !popperRef.current?.contains(event.target as Node)
        ) {
          closePopper();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [popperElement]);

    const formatSelectedDate = (dates?: Date[], dateFormat?: string) => {
      if (!dates || dates.length === 0) return "";
      return dates.map((d) => format(d, dateFormat || "dd/MM/yyyy")).join(", ");
    };

    function CustomSelectDropdown(props: DropdownProps) {
      const { options, value, onChange } = props;

      return (
        <select
          className="border p-1 shadow rounded-md mb-3 outline-none mx-1"
          value={value?.toString()}
          onChange={(e) => onChange?.(e)}
        >
          {options?.map((option) => (
            <option
              key={option.value}
              value={option.value.toString()}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    const handleDaySelect: PropsMulti["onSelect"] = (date) => {
      if (date) setSelectedDate(date);
    };

    return (
      <div className="relative w-full">
        <div ref={popperRef}>
          <Input
            type="text"
            readOnly
            ref={ref}
            className="w-full main-shadow"
            placeholder={placeholder || format(new Date(), "dd/mm/yyyy")}
            aria-label="Pick a date"
            value={formatSelectedDate(selectedDate, dateFormat)}
            onClick={() => setIsPopperOpen(true)}
            disabled={disabled}
          />
        </div>

        {isPopperOpen && (
          <div
            tabIndex={-1}
            className={cn(
              "text-[16px] shadow-sm border border-primary-600 bg-white rounded-md",
              "mt-1 mx-auto z-[1000] transition-all absolute duration-75 delay-100 ease-in-out",
            //   {
            //     "bottom-11 right-0": position === "top-right",
            //     "bottom-11 left-0": position === "top-left",
            //     "top-10 right-0": position === "bottom-right" || !position,
            //     "top-10 left-0": position === "bottom-left",
            //   }
            )}
            ref={(element) => setPopperElement(element)}
            role="dialog"
            aria-label="Multiple DayPicker calendar"
          >
            <DayPicker
              mode="multiple"
              hideNavigation
              hideWeekdays={hideWeekdays}
              showOutsideDays
              startMonth={startMonth}
              endMonth={
                endMonth
                  ? endMonth
                  : new Date(new Date().getFullYear() + 100, 12)
              }
              selected={selectedDate}
              timeZone={timeZone}
              max={max}
              min={min}
              defaultMonth={selectedDate?.[0] || new Date()}
              disabled={disabledCalendar}
              components={{ Dropdown: CustomSelectDropdown }}
              captionLayout="dropdown"
              onSelect={handleDaySelect}
              modifiersStyles={{
                selected: {
                  backgroundColor: "var(--primary-500)",
                  color: "white",
                  borderRadius: "5px",
                },
              }}
              footer={footer}
            />
          </div>
        )}
      </div>
    );
  }
);

MultipleDatePicker.displayName = "MultipleDatePicker";

// ============ Date Range Picker Component ============
interface DateRangePickerProps {
  selectedRange?: DateRange | undefined;
  setSelectedRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  handleRangeSelect?: (range: DateRange | undefined) => void;
  handleApply?: () => void;
  handleReset?: () => void;
  disabled?: boolean;
  disabledCalendar?: { before: Date } | { after: Date };
  children?: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  apply?: boolean;
  hideWeekdays?: boolean;
  endMonth?: Date | undefined;
  startMonth?: Date | undefined;
  timeZone?: string | undefined;
  rangeFormat?: string;
  placeholder?: string;
  max?: number | undefined;
  min?: number | undefined;
}

const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      selectedRange,
      setSelectedRange,
      handleRangeSelect,
      disabledCalendar,
      position = "bottom-right",
      children,
      apply,
      handleReset = () => {
        setSelectedRange(undefined);
      },
      placeholder,
      rangeFormat,
      disabled,
      endMonth,
      hideWeekdays,
      startMonth,
      timeZone = "Asia/Kolkata",
      max,
      min,
    },
    ref
  ) => {
    const [isPopperOpen, setIsPopperOpen] = useState(false);

    const popperRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => popperRef.current!);

    const formatDateRange = (rangeFormat: string, range?: DateRange) => {
      if (!range?.from) return "";
      if (!range.to) return format(range.from, rangeFormat) + " - ";
      return `${format(range.from, rangeFormat)} - ${format(
        range.to,
        rangeFormat
      )}`;
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!popperRef.current?.contains(event.target as Node)) {
          setIsPopperOpen(false);
        }
      };

      if (isPopperOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isPopperOpen]);

    const handleButtonClick = () => setIsPopperOpen(true);

    function CustomSelectDropdown(props: DropdownProps) {
      const { options, value, onChange } = props;

      const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(event);
        }
      };

      return (
        <select
          className="border p-1 shadow rounded-md mb-3 outline-none mx-1"
          value={value?.toString()}
          onChange={handleValueChange}
        >
          {options?.map((option) => (
            <option
              key={option.value}
              value={option.value.toString()}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    const handleRangeSelectInternal: PropsRange["onSelect"] = (range) => {
      if (range?.from) {
        setSelectedRange((prevRange) => ({
          from: range.from,
          to: prevRange?.to ?? undefined,
        }));
      }

      if (range?.to) {
        setSelectedRange({
          from: range.from ?? undefined,
          to: range.to,
        });
      }

      if (handleRangeSelect) {
        handleRangeSelect(range);
      }
    };

    return (
      <div className="relative w-full">
        <div ref={popperRef}>
          <Input
            type="text"
            placeholder={placeholder ?? "DD/MM/YYYY - DD/MM/YYYY"}
            className="main-shadow w-full"
            readOnly
            disabled={disabled}
            value={formatDateRange(rangeFormat ?? "dd/MM/yyyy", selectedRange)}
            onClick={handleButtonClick}
          />
        </div>
        {isPopperOpen && (
          <div
            className={cn(
              "shadow-md rounded-md border border-primary-600 p-3 flex gap-5 justify-center items-start",
              "mt-1 h-[330px] absolute bg-white z-[1000] transition-all duration-75 delay-100 ease-in-out",
              position === "top-left" && "bottom-11 left-0",
              position === "top-right" && "bottom-11 right-0",
              position === "bottom-left" && "top-10 left-0",
              position === "bottom-right" && "top-10 right-0"
            )}
            ref={popperRef}
            aria-label="Date Range Picker"
          >
            {children && (
              <div className="flex flex-col whitespace-nowrap items-start h-full border-r border-gray-200 pr-2">
                {children}
              </div>
            )}
            <div className="flex flex-col h-full justify-between">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={handleRangeSelectInternal}
                showOutsideDays
                disabled={disabledCalendar}
                components={{ Dropdown: CustomSelectDropdown }}
                hideNavigation
                hideWeekdays={hideWeekdays}
                timeZone={timeZone}
                startMonth={startMonth}
                endMonth={
                  endMonth
                    ? endMonth
                    : new Date(new Date().getFullYear() + 100, 12)
                }
                max={max}
                min={min}
                captionLayout="dropdown"
                modifiersStyles={{
                  selected: {
                    backgroundColor: "var(--primary-600)",
                    borderRadius: "5px",
                  },
                  range_middle: {
                    borderRadius: "0px",
                    backgroundColor: "var(--primary-200)",
                    color: "black",
                  },
                  range_start: {
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "0px",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "0px",
                  },
                  range_end: {
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "5px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "5px",
                  },
                }}
              />
              <div className="flex justify-between pt-2 border-t border-gray-200 gap-3">
                <Button
                  variant="outlined"
                  className="border-none py-1 px-2 text-sm"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                {apply && (
                  <Button
                    className="py-1 px-2 text-sm"
                  >
                    Apply
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";

// ============ Main Component ============
const DatePickerNext = () => {
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

  const presetOptions = [
    { label: "Today", value: "today" },
    { label: "Last 1 Month", value: "last1Months" },
    { label: "Last 3 Months", value: "last3Months" },
    { label: "Last 6 Months", value: "last6Months" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mt-3">
          Date Picker Components (Next.js)
        </h1>
        <p className="text-gray-600">
          Complete date selection components built for Next.js
        </p>
      </div>

      {/* Single & Multiple Date Pickers - Same Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Single Date Picker */}
        <section className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-4">
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
              title="Single Date Picker - Next.js"
              code={`import { useState } from "react";
import { SingleDatePicker } from "./components/date-picker";
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
              title="Multiple Date Picker - Next.js"
              code={`import { useState } from "react";
import { MultipleDatePicker } from "./components/date-picker";

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
  );
};`}
            />
          </div>
        </section>
      </div>

      {/* Date Range Pickers - Full Width Below */}
      <section className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="flex items-center gap-3 mb-6">
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
              title="Date Range Picker - Next.js"
              code={`import { useState } from "react";
import { DateRangePicker } from "./components/date-picker";

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
                    {presetOptions.map((preset) => (
                      <button
                        key={preset.value}
                        className="px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg border border-gray-200 transition-colors"
                        onClick={() => applyPreset(preset.value as any)}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </DateRangePicker>
            </div>

            {selectedRange?.from && selectedRange?.to && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
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
              title="Date Range Picker with Presets - Next.js"
              code={`import { useState } from "react";
import { DateRangePicker } from "./components/date-picker";
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

export default DatePickerNext;