import os
import pandas as pd

# 1. Load RBA Table G1
excel_path = 'scripts/g01hist.xlsx'
df_raw = pd.read_excel(excel_path, sheet_name='Data', skiprows=10)

# 2. Extract Date, Headline CPI (GCPIAGYP), and Trimmed Mean (GCPIOCPMTMYP)
df = pd.DataFrame({
    'Date': pd.to_datetime(df_raw.iloc[:, 0], errors='coerce'),
    'Headline_CPI': pd.to_numeric(df_raw['GCPIAGYP'], errors='coerce'),
    'Trimmed_Mean': pd.to_numeric(df_raw['GCPIOCPMTMYP'], errors='coerce')
})

# 3. Filter valid quarterly dates strictly from 2021 to June 2026
df = df.dropna(subset=['Date', 'Headline_CPI'])
df = df[(df['Date'] >= '2021-01-01') & (df['Date'] <= '2026-06-30')].copy()

# 4. Add formatted date strings, quarter labels, and RBA target corridor
df['Date_Str'] = df['Date'].dt.strftime('%Y-%m-%d')
df['Quarter'] = df['Date'].dt.strftime('%b %Y')
df['Target_Min'] = 2.0
df['Target_Max'] = 3.0
df['Above_Target'] = df['Headline_CPI'] > 3.0
df['Excess_Inflation'] = (df['Headline_CPI'] - 3.0).clip(lower=0).round(2)

# Sort chronologically
df = df.sort_values('Date').reset_index(drop=True)

# Output directly into the project's data folder (relative to this script)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

output_path = os.path.join(PROJECT_ROOT, 'data', 'cpi_target_band_threshold.csv')
df.to_csv(output_path, index=False)
