import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  hasRole,
  canManageProviderArea,
  canAccessConsumerArea,
  canPublishProviderProfile,
  canAcceptBookings,
  canLeaveReview
} from './permissions';

describe('Permissions lib', () => {
  describe('hasRole', () => {
    it('returns true when user has the exact role', () => {
      assert.equal(hasRole(['admin'], 'admin'), true);
      assert.equal(hasRole(['provider'], 'provider'), true);
      assert.equal(hasRole(['consumer'], 'consumer'), true);
    });

    it('returns true when user has multiple roles including the target role', () => {
      assert.equal(hasRole(['consumer', 'provider'], 'provider'), true);
      assert.equal(hasRole(['admin', 'consumer'], 'admin'), true);
    });

    it('returns false when user lacks the target role', () => {
      assert.equal(hasRole(['consumer'], 'admin'), false);
      assert.equal(hasRole(['provider'], 'consumer'), false);
    });

    it('returns false when user roles array is empty', () => {
      assert.equal(hasRole([], 'admin'), false);
    });
  });

  describe('canManageProviderArea', () => {
    it('returns true for admin role', () => {
      assert.equal(canManageProviderArea(['admin']), true);
    });

    it('returns true for provider role', () => {
      assert.equal(canManageProviderArea(['provider']), true);
    });

    it('returns false for consumer role', () => {
      assert.equal(canManageProviderArea(['consumer']), false);
    });

    it('returns false for empty roles', () => {
      assert.equal(canManageProviderArea([]), false);
    });
  });

  describe('canAccessConsumerArea', () => {
    it('returns true for admin role', () => {
      assert.equal(canAccessConsumerArea(['admin']), true);
    });

    it('returns true for consumer role', () => {
      assert.equal(canAccessConsumerArea(['consumer']), true);
    });

    it('returns false for provider role', () => {
      assert.equal(canAccessConsumerArea(['provider']), false);
    });

    it('returns false for empty roles', () => {
      assert.equal(canAccessConsumerArea([]), false);
    });
  });

  describe('canPublishProviderProfile', () => {
    it('returns true for admin with approved state', () => {
      assert.equal(canPublishProviderProfile(['admin'], 'approved'), true);
    });

    it('returns true for provider with approved state', () => {
      assert.equal(canPublishProviderProfile(['provider'], 'approved'), true);
    });

    it('returns false when state is not approved', () => {
      assert.equal(canPublishProviderProfile(['provider'], 'draft'), false);
      assert.equal(canPublishProviderProfile(['provider'], 'pending'), false);
      assert.equal(canPublishProviderProfile(['provider'], 'restricted'), false);
    });

    it('returns false when user cannot manage provider area', () => {
      assert.equal(canPublishProviderProfile(['consumer'], 'approved'), false);
    });
  });

  describe('canAcceptBookings', () => {
    it('returns true for provider with approved state and stripe payouts', () => {
      assert.equal(canAcceptBookings(['provider'], 'approved', true), true);
    });

    it('returns true for admin with approved state and stripe payouts', () => {
      assert.equal(canAcceptBookings(['admin'], 'approved', true), true);
    });

    it('returns false when user lacks stripe payouts', () => {
      assert.equal(canAcceptBookings(['provider'], 'approved', false), false);
    });

    it('returns false when state is not approved', () => {
      assert.equal(canAcceptBookings(['provider'], 'draft', true), false);
    });

    it('returns false when user cannot manage provider area', () => {
      assert.equal(canAcceptBookings(['consumer'], 'approved', true), false);
    });
  });

  describe('canLeaveReview', () => {
    it('returns true for consumer with completed booking', () => {
      assert.equal(canLeaveReview(['consumer'], 'completed'), true);
    });

    it('returns true for admin with completed booking', () => {
      assert.equal(canLeaveReview(['admin'], 'completed'), true);
    });

    it('returns false when booking is not completed', () => {
      assert.equal(canLeaveReview(['consumer'], 'other'), false);
    });

    it('returns false when user cannot access consumer area', () => {
      assert.equal(canLeaveReview(['provider'], 'completed'), false);
    });
  });
});
