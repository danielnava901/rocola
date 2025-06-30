import * as React from 'react';

interface InputProps {
    type?: 'text' | 'email' | 'password' | 'number' | 'date';
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    className?: string;
}

const Input: React.FC<InputProps> = (
    {
        type = 'text',
        value,
        onChange,
        onBlur,
        placeholder,
        label,
        required = false,
        disabled = false,
        error,
        className = ''
    }) => {
    const baseClasses = 'w-full ' +
        'px-3 py-2 rounded-lg ' +
        'border border-gray-100 ' +
        'focus:outline-none ' +
        'focus:ring-2 focus:ring-red-200 ' +
        'focus:border-transparent ' +
        'transition-colors duration-200 ' +
        '';
    const errorClasses = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300';
    const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

    return (
        <div className={`w-full rounded-lg flex items-center`}>
            {label && (
                <label className="block text-sm text-gray-700 mb-1 font-bold">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="w-full">
                <input
                    id={'id'+value}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className={`${baseClasses} ${errorClasses} ${disabledClasses}`}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

export default Input;