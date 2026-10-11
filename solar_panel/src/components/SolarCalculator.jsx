
import { useState } from "react";
import {
  Sun,
  Zap,
  IndianRupee,
  Calculator,
  ArrowUpRight,
  CheckCircle2,
  Info,
} from "lucide-react";

export default function SolarCalculator() {
  const [bill, setBill] = useState("");
  const [units, setUnits] = useState("");
  const [rate, setRate] = useState("7");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (event) => {
    event.preventDefault();
    setError("");
    setResult(null);

    const monthlyBill = bill === "" ? null : Number(bill);
    const monthlyUnits = units === "" ? null : Number(units);
    const unitRate = Number(rate);

    // At least one main input is required.
    if (monthlyBill === null && monthlyUnits === null) {
      setError("Please enter your monthly bill or units consumed.");
      return;
    }

    if (
      (monthlyBill !== null &&
        (!Number.isFinite(monthlyBill) ||
          monthlyBill <= 0 ||
          monthlyBill > 10000000)) ||
      (monthlyUnits !== null &&
        (!Number.isFinite(monthlyUnits) ||
          monthlyUnits <= 0 ||
          monthlyUnits > 1000000))
    ) {
      setError("Please enter a valid bill amount or unit consumption.");
      return;
    }

    if (
      monthlyBill !== null &&
      (!Number.isFinite(unitRate) || unitRate <= 0 || unitRate > 1000)
    ) {
      setError("Please enter a valid electricity cost per unit.");
      return;
    }

    // If units are provided, use them as the primary consumption figure.
    // Otherwise, estimate units using the bill and the entered unit rate.
    const estimatedUnits =
      monthlyUnits !== null
        ? monthlyUnits
        : monthlyBill / unitRate;

    // Rough planning estimate, not a production guarantee.
    const recommendedKW = Math.max(
      1,
      Math.ceil(estimatedUnits / 120)
    );

    setResult({
      monthlyUnits: Math.round(estimatedUnits),
      annualUnits: Math.round(estimatedUnits * 12),
      recommendedKW,
      monthlyBill,
      source:
        monthlyUnits !== null && monthlyBill !== null
          ? "Based on your entered units; bill provided for reference."
          : monthlyUnits !== null
            ? "Based on your entered monthly units."
            : "Units estimated from your bill and electricity rate.",
    });
  };

  const resetCalculator = () => {
    setBill("");
    setUnits("");
    setRate("7");
    setError("");
    setResult(null);
  };

  return (
    <section
      id="solar-calculator"
      className="section scroll-mt-24 bg-white"
    >
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-label">
            Solar Calculator
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            How Much Solar
            <span className="text-[var(--color-primary)]">
              {" "}Do You Need?
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text)]">
            Enter your electricity bill, monthly units consumed,
            or both to estimate your solar requirements.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-xl lg:grid-cols-2">
          {/* Input form */}
          <div className="p-6 sm:p-10">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                <Calculator size={25} />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Your Electricity Details
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Enter either value or both
                </p>
              </div>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Monthly bill */}
              <div>
                <label
                  htmlFor="monthly-bill"
                  className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Monthly Electricity Bill (₹)
                </label>

                <div className="flex overflow-hidden rounded-xl border border-[var(--color-border)] focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/10">
                  <span className="flex items-center border-r border-[var(--color-border)] bg-[var(--color-surface)] px-4">
                    <IndianRupee size={19} />
                  </span>

                  <input
                    id="monthly-bill"
                    type="number"
                    min="1"
                    max="10000000"
                    step="1"
                    value={bill}
                    onChange={(event) => {
                      setBill(event.target.value);
                      setResult(null);
                      setError("");
                    }}
                    placeholder="e.g. 2000"
                    className="h-12 w-full min-w-0 px-4 text-sm outline-none"
                  />
                </div>

                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  Enter your average monthly bill amount.
                </p>

                <p className=" text-2xl mt-4 text-center"> Or</p>
              </div>



              {/* Monthly units */}
              <div>
                <label
                  htmlFor="monthly-units"
                  className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Monthly Electricity Consumption (Units)
                </label>

                <div className="flex overflow-hidden rounded-xl border border-[var(--color-border)] focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/10">
                  <span className="flex items-center border-r border-[var(--color-border)] bg-[var(--color-surface)] px-4">
                    <Zap size={19} />
                  </span>

                  <input
                    id="monthly-units"
                    type="number"
                    min="1"
                    max="1000000"
                    step="1"
                    value={units}
                    onChange={(event) => {
                      setUnits(event.target.value);
                      setResult(null);
                      setError("");
                    }}
                    placeholder="e.g. 300 units"
                    className="h-12 w-full min-w-0 px-4 text-sm outline-none"
                  />
                </div>

                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  Find this value in the units consumed section of your bill.
                </p>
              </div>

              {/* Electricity rate */}
              <div>
                <label
                  htmlFor="unit-rate"
                  className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Average Cost Per Unit (₹)
                </label>

                <input
                  id="unit-rate"
                  type="number"
                  min="0.1"
                  max="1000"
                  step="0.1"
                  value={rate}
                  onChange={(event) => {
                    setRate(event.target.value);
                    setResult(null);
                    setError("");
                  }}
                  className="h-12 w-full rounded-xl border border-[var(--color-border)] px-4 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                />

                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  Used only when estimating units from the bill.
                  Your effective rate may vary with fixed charges
                  and tariff slabs.
                </p>
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              <button type="submit" className="btn btn-primary w-full">
                Calculate Solar Requirements
                <ArrowUpRight size={18} />
              </button>

              <button
                type="button"
                onClick={resetCalculator}
                className="w-full text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              >
                Clear all fields
              </button>
            </form>

            <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-[var(--color-muted)]">
              <Info size={16} className="mt-0.5 shrink-0" />
              <p>
                If you enter both values, actual units consumed
                will be used for the estimate.
              </p>
            </div>
          </div>

          {/* Results panel */}
          <div className="flex flex-col bg-[var(--color-primary)] p-6 text-white sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                <Sun size={27} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Your Solar Estimate
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {result
                    ? "Calculated from your details"
                    : "Your results will appear here"}
                </p>
              </div>
            </div>

            {result ? (
              <>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                  <p className="text-sm font-medium text-white/75">
                    Indicative solar system size
                  </p>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {result.recommendedKW}
                    </span>
                    <span className="text-lg text-white/80">kW</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Preliminary sizing based on estimated monthly
                    electricity consumption.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-xs leading-5 text-white/70">
                      Monthly consumption
                    </p>
                    <p className="mt-2 text-2xl font-bold">
                      {result.monthlyUnits.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-white/70">units (kWh)</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-xs leading-5 text-white/70">
                      Annual consumption
                    </p>
                    <p className="mt-2 text-2xl font-bold">
                      {result.annualUnits.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-white/70">units (kWh)</p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-white/70">
                  {result.source}
                </p>

                <div className="mt-6 rounded-xl bg-white p-4 text-[var(--color-heading)]">
                  <p className="text-sm font-bold">
                    Get a recommendation for your property
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[var(--color-text)]">
                    Roof area, shade, orientation, local sunlight
                    and applicable technical requirements affect
                    the final system size.
                  </p>

                  <a href="#contact" className="btn btn-accent mt-4 w-full">
                    Request a Solar Consultation
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                  <Sun
                    size={42}
                    strokeWidth={1.5}
                    className="text-[var(--color-accent)]"
                  />
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  Your Results Start Here
                </h4>

                <p className="mt-3 max-w-xs text-sm leading-7 text-white/75">
                  Enter your bill, monthly units, or both to
                  estimate your electricity consumption and
                  solar system requirements.
                </p>
              </div>
            )}

            <p className="mt-6 text-xs leading-5 text-white/60">
              Planning estimate only. Actual solar generation and
              required capacity depend on site conditions and
              professional assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
