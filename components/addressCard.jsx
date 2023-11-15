'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AddressCard = ({
  address,
  onClick,
  selected,
  onEdit,
  onDelete,
  onSetDefault,
  showDefault = true,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer',
        selected ? 'border-2 border-indigo-600' : 'border-2 border-gray-200'
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-col">
            {address.default && (
              <span
                className="text-xs text-indigo-600 border border-indigo-600 rounded-md px-2 py-1 bg-indigo-50 w-max
              "
              >
                Default
              </span>
            )}
            <span className="text-lg font-semibold">{address.name}</span>
            <span className="text-sm">{address.phone}</span>
            <span className="text-sm">{address.address}</span>

            <span className="text-sm">
              {address.city}, {address.state} - {address.pincode}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-col md:flex-row">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </Button>
          {!address.default && showDefault && (
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onSetDefault();
              }}
            >
              Set as Default
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
