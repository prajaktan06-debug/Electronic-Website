tional features
from fpdf import FPDF
from datetime import datetime

# Sample cart data
cart_items = [
    {"name": "Samsung TV", "price": 25000},
    {"name": "JBL Speaker", "price": 4500},
]

customer_info = {
    "name": "Ravi Patil",
    "phone": "9876543210",
    "address": "Kasara near station"
}

# Create PDF invoice
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)

# Header
pdf.set_font("Arial", 'B', 16)
pdf.cell(200, 10, txt="ElectroMart - Invoice", ln=True, align='C')
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt=f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}", ln=True, align='R')
pdf.ln(10)

# Customer Info
pdf.set_font("Arial", 'B', 12)
pdf.cell(200, 10, txt="Customer Details:", ln=True)
pdf.set_font("Arial", size=12)
pdf.cell(200, 8, txt=f"Name: {customer_info['name']}", ln=True)
pdf.cell(200, 8, txt=f"Phone: {customer_info['phone']}", ln=True)
pdf.multi_cell(200, 8, txt=f"Address: {customer_info['address']}")
pdf.ln(5)

# Cart Items
pdf.set_font("Arial", 'B', 12)
pdf.cell(130, 10, "Item", 1)
pdf.cell(60, 10, "Price (₹)", 1, ln=True)
pdf.set_font("Arial", size=12)

total = 0
for item in cart_items:
    pdf.cell(130, 10, item['name'], 1)
    pdf.cell(60, 10, f"{item['price']:.2f}", 1, ln=True)
    total += item['price']

# Total
pdf.set_font("Arial", 'B', 12)
pdf.cell(130, 10, "Total", 1)
pdf.cell(60, 10, f"₹{total:.2f}", 1, ln=True)

# Save PDF
pdf.output("invoice_electromart.pdf")
print("✅ Invoice saved as 'invoice_electromart.pdf'")
