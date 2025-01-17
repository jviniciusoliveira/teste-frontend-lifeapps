type QuantityFieldProps = {
  value: number
  onChange: (value: number) => void
  maxQuantity?: number
}

export function QuantityField({
  value,
  onChange,
  maxQuantity = 10,
}: QuantityFieldProps) {
  return (
    <select
      name="productQuantity"
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    >
      {Array.from({ length: maxQuantity }, (_, i) => i + 1).map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>
  )
}
